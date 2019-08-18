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
        <span class="reset-icon-container" @click="emitReset">
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

<style>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--header-font-color);
  background-color: var(--color-primary);
  padding: 0 1.5rem;
  height: 56px;
  font-size: var(--body-font-size);
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
  color: var(--color-primary);
  background-color: var(--header-font-color);
}

#reset-icon {
  fill: var(--header-font-color);
}

.reset-icon-container:hover #reset-icon {
  fill: var(--color-primary);
}

@media only screen and (min-width: 932px) {
  .app-header {
    height: 64px;
  }
}
</style>
