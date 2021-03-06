import Vue from 'vue'
import get from 'lodash/get'
function getFromTo (val) {
  const now = val || Date.now(),
    from = new Date(now).setHours(0, 0, 0, 0),
    to = from + 86399999
  return { from, to }
}
async function initTime ({ state, commit }) {
  let timestamp = Date.now()
  try {
    const resp = await Vue.connector.gw.getChannelsIdentsPackets(state.active, state.ident, { data: { count: 1, reverse: true } })
    timestamp = get(resp, 'data.result[0].timestamp', Math.floor(Date.now() / 1000))
    timestamp = Math.round(timestamp * 1000)
  } catch (e) {}
  const day = getFromTo(timestamp)
  commit('setFrom', day.from)
  commit('setTo', day.to)
}
async function getDevices ({ state, commit }) {
  if (typeof state.isLoading !== 'undefined') {
    Vue.set(state, 'isLoading', true)
  }
  try {
    const resp = await Vue.connector.gw.getChannelsIdents(state.active, state.deviceFilter ? `*${state.deviceFilter}*` : '*')
    let idents = get(resp, 'data.result', [])
    idents = idents.reduce((idents, { ident, size }) => {
      idents[ident] = { ident, size }
      return idents
    }, {})
    commit('setDevices', idents)
  } catch (e) {
    commit('reqFailed', e)
  }
  if (typeof state.isLoading !== 'undefined') {
    Vue.set(state, 'isLoading', false)
  }
}
async function getMessages ({ state, commit }) {
  if (typeof state.isLoading !== 'undefined') {
    Vue.set(state, 'isLoading', true)
  }
  try {
    const to = state.to > Date.now() ? Date.now() : state.to
    const resp = await Vue.connector.gw.getChannelsIdentsPackets(state.active, state.ident, { data: { from: Math.floor(state.from / 1000), to: Math.floor(to / 1000), count: state.limit } })
    const messages = get(resp, 'data.result', [])
    commit('setMessages', messages)
  } catch (e) {
    commit('reqFailed', e)
  }
  if (typeof state.isLoading !== 'undefined') {
    Vue.set(state, 'isLoading', false)
  }
}

async function getMessagesTail ({ state, commit }) {
  if (typeof state.isLoading !== 'undefined') {
    Vue.set(state, 'isLoading', true)
  }
  try {
    const resp = await Vue.connector.gw.getChannelsIdentsPackets(state.active, state.ident, { data: { count: state.limit, reverse: true } })
    const messages = get(resp, 'data.result', [])
    messages.reverse()
    commit('setMessages', messages)
  } catch (e) {
    commit('reqFailed', e)
  }
  if (typeof state.isLoading !== 'undefined') {
    Vue.set(state, 'isLoading', false)
  }
}
let requestStatus = false
async function getMessagesNext ({ state, commit }) {
  if (!state.messages.length || requestStatus || state.messagePolling) { return }
  requestStatus = true
  try {
    const from = Math.ceil(state.messages[state.messages.length - 1].timestamp)
    const resp = await Vue.connector.gw.getChannelsIdentsPackets(state.active, state.ident, { data: { count: state.limit, from, to: Math.floor(state.to / 1000) } })
    const messages = get(resp, 'data.result', [])
    commit('setMessagesAppend', messages)
  } catch (e) {
    commit('reqFailed', e)
  }
  requestStatus = false
}

async function getMessagesPrev ({ state, commit }) {
  if (!state.messages.length || requestStatus) { return }
  requestStatus = true
  try {
    const to = Math.floor(state.messages[0].timestamp) - 1
    const resp = await Vue.connector.gw.getChannelsIdentsPackets(state.active, state.ident, { data: { count: state.limit, from: Math.floor(state.from / 1000), to, reverse: true } })
    const messages = get(resp, 'data.result', [])
    messages.reverse()
    commit('setMessagesPrepend', messages)
  } catch (e) {
    commit('reqFailed', e)
  }
  requestStatus = false
}

async function pollingGetDevices ({ state, commit }) {
  await Vue.connector.socket.subscribe({
    name: `flespi/log/gw/channels/${state.active}/connections/+/identified`,
    handler: (value, topic, packet) => {
      value = JSON.parse(value.toString())
      const ident = value.ident
      if (!state.devices[ident] && ident.indexOf(state.deviceFilter) !== -1) {
        Vue.set(state.devices, ident, { ident })
      }
    }
  })
  state.realtimeEnabled = true
}
async function removePollingGetDevices ({ state, commit }) {
  state.realtimeEnabled = false
  await Vue.connector.socket.unsubscribe(`flespi/log/gw/channels/${state.active}/connections/+/identified`)
}
let mesagesPollingId = 0
function pollingGetMessages ({ state, commit }) {
  mesagesPollingId = setInterval(async () => {
    try {
      const from = Math.ceil(state.messages[state.messages.length - 1].timestamp)
      const to = Math.ceil(Date.now() / 1000)
      const resp = await Vue.connector.gw.getChannelsIdentsPackets(state.active, state.ident, { data: { from, to } })
      const messages = get(resp, 'data.result', [])
      commit('setMessagesAppend', messages)
    } catch (e) {
      commit('reqFailed', e)
    }
  }, 10000)
  state.messagePolling = true
}
function removePollingGetMessages ({ state, commit }) {
  clearInterval(mesagesPollingId)
  mesagesPollingId = 0
  state.messagePolling = false
}
async function getDevicePreview ({ state }, device) {
  let messages = []
  try {
    const resp = await Vue.connector.gw.getChannelsIdentsPackets(state.active, device.ident, { data: { count: 20, reverse: true } })
    messages = get(resp, 'data.result', [])
  } catch (e) {}
  return messages
}
async function getExportData ({ state }, { from, to }) {
  let messages = []
  try {
    const resp = await Vue.connector.gw.getChannelsIdentsPackets(state.active, state.ident, { data: { from, to } })
    messages = get(resp, 'data.result', [])
  } catch (e) {}
  return messages
}
export default {
  initTime,
  getMessages,
  getMessagesTail,
  getMessagesNext,
  getMessagesPrev,
  getDevices,
  pollingGetDevices,
  removePollingGetDevices,
  pollingGetMessages,
  removePollingGetMessages,
  getDevicePreview,
  getExportData
}
