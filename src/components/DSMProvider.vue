<template>
  <div class="full-height">
    <Spinner v-show="isLoading" />
    <ToDoContainer v-show="!isLoading" />
  </div>
</template>

<script>
import axios from 'axios'
import Spinner from '@/components/Spinner'
import ToDoContainer from '@/components/ToDoContainer'

export default {
  data() {
    return {
      isLoading: true,
      styles: {}
    }
  },
  components: {
    Spinner,
    ToDoContainer
  },
  async mounted() {
    this.massageDSMVariables(await this.fetchDSMTokens())
  },
  methods: {
    async fetchDSMTokens() {
      this.isLoading = true
      const DSMVariables = await axios.get(
        'https://projects.invisionapp.com/dsm-export/low-tide/low-tide/style-data.json?exportFormat=list&key=B1nQrj-AN'
      )

      this.isLoading = false

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
          this.updateCSSVariable(`--${color.name}`, color.value)
          this.styles[`${color.name}`] = color.value
        })
      })

      this.styles['font-family'] = `${typeStyles[3]['fontFamily']}`
    },
    updateCSSVariable: function(name, value) {
      this.$el.style.setProperty(name, value)
    }
  }
}
</script>

<style>
:root {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  --base-height: 10rem;
  --base-line-height: 1rem;
  --base-space: 0.5rem;
  --base-transition: 0.2s ease-in-out;
  --base-font-size: 1.25rem;
}

.full-height {
  min-height: 100vh;
}

@media only screen and (min-width: 600px) {
  :root {
    --base-height: 12.5rem;
    --base-font-size: 1.5rem;
  }
}

@media only screen and (min-width: 932px) {
  :root {
    --base-height: 15rem;
    --base-font-size: 1.75rem;
  }
}
</style>
