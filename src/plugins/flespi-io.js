import VueConnection from 'flespi-io-js/dist/vue-plugin'
import { version } from '../../package'

let connectionConfig = {socketConfig: { clientId: `toolbox-${Math.random().toString(16).substr(2, 8)}` }}

/* if local dev build */
if (DEV && !SERVER) {
  connectionConfig = {
    httpConfig: { server: 'https://localhost', port: 9005 },
    socketConfig: { server: `wss://localhost:9017`, clientId: `toolbox-${version}-${Math.random().toString(16).substr(2, 8)}` }
  }
}

// check for pfront SERVER
if (PROD && SERVER) {
  if (window.location.host.indexOf('localhost:9004') !== -1 || window.location.host.indexOf('localhost:9005') !== -1 || window.location.host.indexOf('localhost:7004') !== -1) {
    connectionConfig = {
      httpConfig: { server: 'https://localhost', port: 9005 },
      socketConfig: { server: `wss://localhost:9017`, clientId: `toolbox-${version}-${Math.random().toString(16).substr(2, 8)}` }
    }
  }
}

export default ({Vue}) => {
  Vue.config.productionTip = false
  Vue.use(VueConnection, connectionConfig)
  if (window) {
    window.addEventListener('beforeunload', () => {
      Vue.connector.socket.end(true)
    })
  }
}
