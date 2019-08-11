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
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');

* {
  box-sizing: border-box;
}

:root {
  background-color: var(--color-background-app);

  font-family: var(--font-simple-large-black-font-family), Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --base-height: 10rem;
  --base-line-height: 1rem;
  --base-space: 0.5rem;
  --base-transition: 0.2s ease-in-out;
  --base-font-size: var(--font-simple-small-black-font-size);
  --base-font-color: var(--font-simple-large-black-color);
}

.full-height {
  min-height: 100vh;
}

@media only screen and (min-width: 600px) {
  :root {
    --base-height: 12.5rem;
    --base-font-size: var(--font-simple-medium-black-font-size);
  }
}

@media only screen and (min-width: 932px) {
  :root {
    --base-height: 15rem;
    --base-font-size: var(--font-simple-large-black-font-size);
  }
}
</style>
