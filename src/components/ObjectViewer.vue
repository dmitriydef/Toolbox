<template>
  <div style="height: 100%">
    <q-item class="q-pa-none">
      <q-item-section>
        <q-item-label class="ellipsis text-bold text-white q-ml-sm">Message</q-item-label>
      </q-item-section>
      <q-item-section side><q-icon color="white" class="pull-right cursor-pointer" name="mdi-close" @click.native="$emit('close')" size="1.8rem" /></q-item-section>
    </q-item>
    <q-item  class="q-pa-none">
      <q-item-section class="q-px-sm">
        <q-input type="text" color="white" dark label="Search" v-model="search" class="q-py-none" outlined dense/>
      </q-item-section>
    </q-item>
    <div style="height: calc(100% - 104px); overflow: auto;">
      <q-list separator dark>
        <q-item v-if="!Object.keys(object).length || !Object.keys(filteredObject).length">
          <q-item-section>
            <q-item-label header class="ellipsis text-bold text-center text-white">No parameters</q-item-label>
            <q-item-label v-if="!Object.keys(object).length" caption class="ellipsis text-center text-white">Message has not fields</q-item-label>
            <q-item-label v-if="!Object.keys(filteredObject).length && this.search" caption class="ellipsis text-center text-white">Nothing found on your search</q-item-label>
          </q-item-section>
        </q-item>
        <template v-if="Object.keys(filteredObject).length">
          <q-item
            v-for="(key) in Object.keys(filteredObject)" :key="key"
          >
            <q-item-section>
              <q-item-label header class="ellipsis text-bold q-pa-none text-white">{{key}}<q-tooltip>{{key}}</q-tooltip></q-item-label>
              <q-item-label v-if="filteredObject[key] && filteredObject[key].toString().match(/^data:image\/(?:gif|png|jpeg|bmp|webp)(?:;charset=utf-8)?;base64,(?:[A-Za-z0-9]|[+/])+={0,2}/)" caption><img class="image-bin" :src="filteredObject[key]" :alt="key"></q-item-label>
              <q-item-label v-else-if="key.indexOf('image.bin.') === -1" caption class="ellipsis text-white">{{JSON.stringify(filteredObject[key])}}<q-tooltip>{{JSON.stringify(filteredObject[key])}}</q-tooltip></q-item-label>
              <q-item-label v-else-if="key.indexOf('image.bin.') === 0" caption><img class="image-bin" :src="`data:image/${key.split('.')[2]};base64, ${filteredObject[key].replace(/^data\:image\/\w*\;base64\,\s/, '')}`" :alt="key"></q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-btn :icon="cols[key] && cols[key].display ? 'mdi-table-column-remove' : 'mdi-table-column-plus-after'" :color="cols[key] && cols[key].display ? 'red-5' : 'white'" @click="toggleColHandler(key)" flat dense>
                <q-tooltip>{{cols[key] && cols[key].display ? 'Hide this column' : 'Show this column'}}</q-tooltip>
              </q-btn>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  props: ['object', 'cols'],
  data () {
    return {
      search: ''
    }
  },
  computed: {
    filteredObject () {
      return Object.keys(this.object).reduce((acc, key) => {
        if (key.indexOf(this.search) !== -1) {
          acc[key] = this.object[key]
        }
        return acc
      }, {})
    }
  },
  methods: {
    toggleColHandler (colName) {
      let col = this.cols[colName]
      if (!col) {
        col = {
          name: colName,
          width: 150,
          display: true
        }
      }
      this.$emit('update:col', col)
    }
  }
}
</script>

<style lang="stylus">
  .image-bin
    max-width 265px
</style>
