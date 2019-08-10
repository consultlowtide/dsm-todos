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
* {
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --white: #fff;
  --black: #000;
  --primary-color: #3427ff;
  --base-height: 10rem;
  --base-line-height: 1rem;
  --base-space: 0.5rem;
  --base-transition: 0.2s ease-in-out;
}

@media only screen and (min-width: 600px) {
  #app {
    --base-height: 12.5rem;
  }
}

@media only screen and (min-width: 932px) {
  #app {
    --base-height: 15rem;
  }
}
</style>
