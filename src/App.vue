<template>
  <div id="app">
    <ToDoContainer />
  </div>
</template>

<script>
import ToDoContainer from '@/components/ToDoContainer'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    ToDoContainer
  },
  data() {
    return {
      styles: {}
    }
  },
  async mounted() {
    this.massageDSMVariables(await this.fetchDSMTokens())
  },
  methods: {
    async fetchDSMTokens() {
      const DSMVariables = await axios.get(
        'https://projects.invisionapp.com/dsm-export/low-tide/low-tide/style-data.json?exportFormat=list&key=B1nQrj-AN'
      )
      try {
        return DSMVariables
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(`API ERROR, DSM responded with error: ${err}`)
      }
    },
    async massageDSMVariables(retrievedVariables) {
      const { colors, typeStyles } = retrievedVariables.data.list

      colors.map(colorPalette => {
        colorPalette.colors.map(color => {
          this.styles[`${color.name}`] = color.value
        })
      })

      this.styles['font-family'] = `${typeStyles[3]['fontFamily']}`
    }
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
  --base-font-size: 1.25rem;
}
/* 20, 24, 28 */

@media only screen and (min-width: 600px) {
  #app {
    --base-height: 12.5rem;
    --base-font-size: 1.5rem;
  }
}

@media only screen and (min-width: 932px) {
  #app {
    --base-height: 15rem;
    --base-font-size: 1.75rem;
  }
}
</style>
