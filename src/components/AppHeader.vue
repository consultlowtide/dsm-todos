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
  color: var(--white);
  background-color: var(--primary-color);
  padding: 0 1rem;
  height: 56px;
}

.app-header__action-buttons button {
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border: solid 1px var(--white);
  color: var(--white);
  background-color: var(--primary-color);
  cursor: pointer;
  transition: var(--base-transition);
}

.app-header__action-buttons button:hover {
  width: 80px;
  height: 40px;
  border-radius: 20px;
  background-color: var(--white);
  color: var(--black);
}

@media only screen and (min-width: 932px) {
  .app-header {
    height: 64px;
  }
}
</style>
