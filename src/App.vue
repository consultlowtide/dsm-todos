<template>
  <div id="app">
    <DSMProvider />
  </div>
</template>

<script>
import DSMProvider from '@/components/DSMProvider'

export default {
  name: 'app',
  components: {
    DSMProvider
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>
