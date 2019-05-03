<template>
  <div>
    <div class="app-header">
      <div class="logo">
        <span>
          DSM Proof of Concept
        </span>
      </div>
      <span class="app-header__action-buttons">
        <button @click="emitReset">Reset</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    emitReset() {
      this.$emit('reset-todos')
    }
  }
}
</script>

<style scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.app-header__action-buttons button,
.logo a {
  margin-left: 0.5rem;
}
</style>
