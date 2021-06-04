<template>
  <div
    class="vm-navbar"
    :style="{
      '--vm-color': vmColor,
      '--vm-background': vmBackground,
    }"
  >
    <transition appear name="appear">
      <div
        v-if="overflowVisible"
        class="vm-navbar__overflow-background"
        @click.stop="overflowVisible = false"
        @touchmove.prevent
      />
    </transition>
    <div
      class="vm-navbar--container"
      :overflow="overflow"
      :overflowVisible="overflowVisible"
      :floating="floating"
    >
      <div class="vm-navbar--container__background" />
      <div class="vm-navbar--container__title">
        <slot name="title" />
      </div>
      <div
        class="vm-navbar--container__cross"
        v-if="overflow && $slots.default"
        :overflowVisible="overflowVisible"
        @click="overflowVisible = !overflowVisible"
      >
        <span></span>
        <span></span>
      </div>
      <VMRevealer>
        <div
          class="vm-navbar--container__items"
          v-if="!overflow || overflowVisible"
        >
          <slot />
        </div>
      </VMRevealer>
    </div>
  </div>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import VMRevealer from '../revealer/VMRevealer.vue';

@Component({
  components: {
    VMRevealer,
  },
})
export default class VMNavbar extends Mixins(VMCProp, VMBgProp) {
  @Prop({ default: '400px' }) breakpoint!: string;
  @Prop({ default: false }) floating!: boolean;

  public overflow = false;
  public overflowVisible = false;
  public mediaQuery: MediaQueryList | null = null;

  mounted(): void {
    this.registerMediaQuery();
    this.$router.afterEach(() => {
      this.overflowVisible = false;
    });
  }

  beforeDestroy(): void {
    this.unregisterMediaQuery();
  }

  @Watch('breakpoint', { immediate: true })
  public updateMediaQuery(): void {
    this.registerMediaQuery();
  }

  public registerMediaQuery(): void {
    this.unregisterMediaQuery();
    this.mediaQuery = window.matchMedia(`(max-width: ${this.breakpoint})`);
    this.mediaQuery.addListener(this.mediaQueryListener);
    this.overflowVisible = false;
    this.overflow = this.mediaQuery.matches;
  }

  public unregisterMediaQuery(): void {
    if (this.mediaQuery) {
      this.mediaQuery.removeListener(this.mediaQueryListener);
      this.mediaQuery = null;
    }
  }

  public mediaQueryListener(event: MediaQueryListEvent): void {
    this.overflow = event && event.matches;
  }
}
</script>

<style lang="scss" scoped>
.vm-navbar {
  color: rgba(var(--vm-color), 1);

  &__overflow-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1499;

    background: rgba(#000, 0.85);
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      backdrop-filter: saturate(180%) blur(10px);
      background: rgba(#000, 0.65);
    }
  }

  &--container {
    position: fixed;
    z-index: 1500;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    box-shadow: 2px 4px 8px rgba(#111, 0.05);

    &:not([floating]) {
      top: 0;
      left: 0;
      right: 0;
      padding: 0 5vw;
      padding-top: env(safe-area-inset-top);
    }

    &[floating] {
      top: calc(20px + env(safe-area-inset-top));
      left: 50%;
      width: 400px;
      max-width: calc(90vw - 40px);
      transform: translateX(-50%);
      padding: 0 20px;
      border-radius: #{2 * $border-radius};
    }

    transition: 0.2s ease-in-out;

    @include backdrop-blur();
    &__background {
      transition: 0.2s ease-in-out;
      border-radius: inherit;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(var(--vm-background), 1);
    }

    &__title {
      display: grid;
      place-content: center;
      min-height: 50px;
      position: relative;
      white-space: nowrap;
    }

    &__items {
      position: relative;
      display: flex;
      transition: 0.5s ease-in-out;
      @include vm-scrollbar();
    }

    &__cross {
      cursor: pointer;
      position: absolute;

      height: 50px;
      width: 50px;
      top: env(safe-area-inset-top);
      right: env(safe-area-inset-right);

      span {
        position: absolute;
        border-radius: 10px;
        height: 2px;
        width: 24px;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 1s ease-in-out;
        background: currentColor;
        transition: top 0.25s ease-in-out 0.25s, transform 0.25s ease-in-out 0s !important;

        &:nth-child(1) {
          top: 20px;
          transform: translate(-50%, -50%) rotate(0deg);
        }
        &:nth-child(2) {
          top: 30px;
          transform: translate(-50%, -50%) rotate(0deg);
        }
      }

      &[overflowVisible] {
        span {
          transition: top 0.25s ease-in-out 0s,
            transform 0.25s ease-in-out 0.25s !important;

          &:nth-child(1) {
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
          }
          &:nth-child(2) {
            top: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
          }
        }
      }
    }

    &[overflowVisible] {
      border-bottom-right-radius: #{2 * $border-radius};
      border-bottom-left-radius: #{2 * $border-radius};

      .vm-navbar--container__background {
        opacity: 1;
      }
    }

    &[overflow] {
      display: grid;
      place-content: center;
      grid-template-columns: 1fr;

      .vm-navbar--container__items {
        flex-direction: column;
        padding-bottom: 10px;

        /deep/ .vm-navbar-item {
          &:not(:first-child) {
            border-top: 1px solid currentColor;
          }
          &::before {
            display: none;
          }
        }
      }
    }
  }
}

.appear-enter,
.appear-leave-to {
  opacity: 0;
}
.appear-enter-active,
.appear-leave-active {
  transition: 0.3s ease-in-out;
}
</style>
