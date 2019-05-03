<template>
  <div id="app">
    <ToDoContainer />
  </div>
</template>

<script>
import ToDoContainer from '@/components/ToDoContainer'

export default {
  name: 'app',
  components: {
    ToDoContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
