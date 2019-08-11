<template>
  <div>
    <div class="app-header">
      <div class="logo">
        <a href="https://consultlowtide.ca" target="_blank">
          <Logo />
        </a>
      </div>
      <span class="app-header__action-buttons">
        <span>
          <DSMIcon />
          <span>
            DSM Tokens
          </span>
        </span>
        <span @click="emitReset">
          <ResetIcon />
          <span>Reset</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo'
import DSMIcon from '@/components/DSMIcon'
import ResetIcon from '@/components/ResetIcon'

export default {
  components: {
    Logo,
    DSMIcon,
    ResetIcon
  },
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
  color: var(--font-simple-body-white-color);
  background-color: var(--color-primary);
  padding: 0 1.5rem;
  height: 56px;
  font-size: var(--font-simple-body-white-font-size);
}

.app-header__action-buttons {
  display: flex;
  justify-content: space-between;
}

.app-header__action-buttons > span {
  display: flex;
  align-items: center;
  height: 2.5rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 4px;
  transition: var(--base-transition);
  user-select: none;
}

.app-header__action-buttons > span:not(:last-of-type) {
  margin-right: 0.25rem;
}

.app-header__action-buttons > span:hover {
  background-color: green;
}
/* 
.app-header__action-buttons button {
  width: 80px;
  height: 40px;
  border-radius: 20px;
  border: solid 1px var(--color-background-card);
  color: var(--font-simple-body-white-color);
  background-color: var(--color-primary);
  cursor: pointer;
  transition: var(--base-transition);
} */
/* 
.app-header__action-buttons button:hover {
  width: 80px;
  height: 40px;
  border-radius: 20px;
  background-color: var(--color-background-card);
  color: var(--base-font-color);
} */

@media only screen and (min-width: 932px) {
  .app-header {
    height: 64px;
  }
}
</style>
