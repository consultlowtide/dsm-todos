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

  --white: #fff;
  --black: #000;
  --primary-color: #3427ff;
  --base-height: 15rem;
  --base-line-height: 1rem;
  --base-space: 0.5rem;
  --base-transition: 0.2s ease-in-out;
  box-sizing: border-box;
}
</style>
