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

  font-family: var(--font-large-font-family), Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --base-height: 10rem;
  --base-line-height: 1rem;
  --base-space: 0.5rem;
  --base-transition: 0.2s ease-in-out;
  --card-padding: 1.5rem;
  --base-font-size: var(--font-small-font-size);
  --base-font-color: var(--font-small-color);
  --header-font-size: var(--font-header-font-size);
  --header-font-color: var(--font-header-color);
}

.full-height {
  min-height: 100vh;
}

@media only screen and (min-width: 600px) {
  :root {
    --base-height: 12.5rem;
    --base-font-size: var(--font-medium-font-size);
    --base-font-color: var(--font-medium-color);
    --card-padding: 1.5rem;
  }
}

@media only screen and (min-width: 932px) {
  :root {
    --base-height: 15rem;
    --card-padding: 1.5rem 2rem;
    --base-font-size: var(--font-large-font-size);
    --base-font-color: var(--font-large-color);
  }
}
</style>
