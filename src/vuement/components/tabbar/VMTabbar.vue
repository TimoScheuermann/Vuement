<template>
  <div class="vm-tabbar" :style="tabbarStyle">
    <div class="vm-tabbar__background" />
    <div class="vm-tabbar__items"><slot /></div>
  </div>
</template>

<script lang="ts">
import { convertStyles, getColor } from '@/vuement/util';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VMTabbar extends Vue {
  @Prop() background!: string;
  @Prop() color!: string;

  get tabbarColor(): string | null {
    if (!this.color) return null;
    return `--vm-color:${getColor(this.color)};`;
  }

  get tabbarBackground(): string | null {
    if (!this.background) return null;
    return `--vm-paragraph:${this.background};`;
  }

  get tabbarStyle(): string | null {
    return convertStyles([this.tabbarColor, this.tabbarBackground]);
  }
}
</script>

<style lang="scss" scoped>
.vm-tabbar {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;

  color: var(--vm-color);
  padding: 0 5vw;
  padding-bottom: env(safe-area-inset-top);
  box-shadow: 2px 4px 8px rgba(#111, 0.05);

  &__items {
    position: relative;
    display: flex;
    height: 50px;
    justify-content: space-around;
    flex-wrap: nowrap;
    align-items: center;
  }

  @include backdrop-blur();
  &__background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--vm-paragraph);
  }
}
</style>
