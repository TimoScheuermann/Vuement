<template>
  <div class="tc-navbar" :overflow="overflow" :style="navbarStyle">
    <div class="tc-navbar__background" />
    <div class="tc-navbar__title">
      <slot name="title" />
    </div>
    <div class="tc-navbar__cross" v-if="overflow">
      <i class="ti-cross" @click="overflowVisible = !overflowVisible"></i>
    </div>
    <div
      class="tc-navbar__items"
      ref="items"
      :overflowVisible="overflowVisible"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { convertStyles, getColor } from '@/tcComponents/util';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCNavbar extends Vue {
  @Prop() background!: string;
  @Prop() color!: string;

  public overflow = false;
  public overflowVisible = false;

  mounted(): void {
    window.addEventListener('resize', this.checkOverflow);
    this.checkOverflow();

    this.$router.afterEach(() => (this.overflowVisible = false));
  }

  beforeDestroy(): void {
    window.removeEventListener('resize', this.checkOverflow);
  }

  get navbarColor(): string | null {
    if (!this.color) return null;
    return `--tc-color:${getColor(this, this.color)};`;
  }

  get navbarBackground(): string | null {
    if (!this.background) return null;
    return `--tc-paragraph:${this.background};`;
  }

  get navbarStyle(): string | null {
    return convertStyles([this.navbarColor, this.navbarBackground]);
  }

  public checkOverflow(): void {
    this.overflow = false;
    setTimeout(() => {
      this.overflow = this.isOverflown(this.$refs.items as HTMLElement);
    }, 10);
  }

  public isOverflown(element: HTMLElement): boolean {
    const { clientWidth, scrollWidth } = element;
    return scrollWidth > clientWidth;
  }
}
</script>

<style lang="scss" scoped>
.tc-navbar {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  color: var(--tc-color);
  padding: 0 5vw;
  padding-top: env(safe-area-inset-top);
  box-shadow: 2px 4px 8px rgba(#111, 0.05);

  @include backdrop-blur();
  &__background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--tc-paragraph);
  }

  &__title {
    position: relative;
    white-space: nowrap;
    line-height: 50px;
  }

  &__items {
    position: relative;
    overflow: auto;
    display: flex;
    transition: 0.5s ease-in-out;
  }

  &__cross {
    position: fixed;
    top: env(safe-area-inset-top);
    right: 10px;
    height: 50px;
    display: grid;
    place-content: center;
  }

  &:not([overflow]) .tc-navbar__items {
    overflow: hidden;
  }

  &[overflow] {
    flex-direction: column;

    .tc-navbar__items {
      max-height: 0px;
      &[overflowVisible] {
        max-height: calc(
          100vh - 50px - env(safe-area-inset-top) - env(safe-area-inset-bottom)
        );
        padding-bottom: env(safe-area-inset-bottom);
      }
      flex-direction: column;
      width: 100%;
      margin: 0 -5vw;
      padding: 0 5vw;

      .tc-navbar-item::before {
        display: none;
      }

      .tc-navbar-item ~ .tc-navbar-item {
        border-top: 1px solid currentColor;
      }
    }
  }
}
</style>
