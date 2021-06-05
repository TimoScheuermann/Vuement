<template>
  <div class="v-dark-mode-toggle">
    <vm-switch @input="setMode">
      <i class="ti-sun" slot="checked" />
      <i class="ti-moon" slot="unchecked" />
    </vm-switch>
  </div>
</template>

<script lang="ts">
import { setDarkmode, setLightmode } from '@/utils/helper';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VDarkModeToggle extends Vue {
  public setMode(dark: boolean): void {
    if (dark) setDarkmode();
    else setLightmode();
  }
}
</script>

<style lang="scss" scoped>
.v-dark-mode-toggle {
  position: fixed;
  z-index: 1500;
  bottom: calc(70px + env(safe-area-inset-bottom));
  display: grid;
  place-content: center;
  left: 0;
  padding: 5px;
  border-radius: 0 100px 100px 0;
  background: rgba(var(--vm-background), 1);
  box-shadow: 2px 4px 8px rgba(#111, 0.1);
  @media #{$isDesktop} {
    bottom: env(safe-area-inset-bottom);
  }
}
</style>
