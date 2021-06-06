<template>
  <span>
    <transition name="appear">
      <div
        v-if="overflowVisible"
        class="vm-navbar__overlay"
        @click.stop="overflowVisible = false"
        @touchmove.prevent
        @wheel.prevent
        @mousewheel.prevent
        @DOMMouseScroll.prevent
      />
    </transition>
    <div
      class="vm-navbar"
      :floating="floating"
      :overflowVisible="overflowVisible"
      :style="{ '--vm-color': vmColor, '--vm-background': vmBackground }"
    >
      <div class="vm-navbar__background" />
      <div class="vm-navbar--container">
        <slot name="title">
          <div class="vm-navbar--container__title" v-if="title">
            {{ title }}
          </div>
        </slot>

        <div
          class="vm-navbar--container__spacer"
          v-if="$slots.static || $slots.default"
        />

        <div
          class="vm-navbar--container__items"
          v-if="$slots.default && !overflowVisible && !overflow"
        >
          <slot />
        </div>

        <div class="vm-navbar--container__static" v-if="$slots.static">
          <slot name="static" />
        </div>

        <div
          v-if="overflow && $slots.default"
          class="vm-navbar--container__cross"
          :overflowVisible="overflowVisible"
          @click="overflowVisible = !overflowVisible"
        >
          <span /><span />
        </div>
      </div>
      <VMRevealer>
        <div class="vm-navbar--action-container" v-if="$slots.action">
          <slot name="action" />
        </div>
      </VMRevealer>

      <VMRevealer>
        <div v-if="overflow && overflowVisible && $slots.default">
          <div class="vm-navbar--overflow-container">
            <slot />
          </div>
        </div>
      </VMRevealer>
    </div>
  </span>
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
  @Prop() title!: string;

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

<style lang="scss">
.vm-navbar {
  &--overflow-container {
    padding: 10px 0;
    > *:not(:first-child) {
      border-top: 1.5px solid rgba(var(--vm-color), 0.5);
    }
    .vm-navbar-item {
      font-weight: 500;
      &[active] {
        font-weight: 600;
      }
      &::before {
        display: none;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.vm-navbar__overlay {
  position: fixed;
  background: rgba(#000, 0.85);
  @supports (backdrop-filter: saturate(180%) blur(20px)) {
    backdrop-filter: saturate(180%) blur(10px);
    background: rgba(#000, 0.65);
  }
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}

.vm-navbar {
  position: fixed;
  z-index: 101;

  color: rgba(var(--vm-color), 1);
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 2px 4px 8px rgba(#111, 0.05);

  &:not([floating]) {
    top: 0;
    left: 0;
    right: 0;
    padding: env(safe-area-inset-top) 5vw 0;
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

  &[overflowVisible] {
    border-bottom-right-radius: #{2 * $border-radius};
    border-bottom-left-radius: #{2 * $border-radius};
  }

  &:not([overflowVisible]) {
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      .vm-navbar__background {
        opacity: 0.72;
      }
    }
  }

  &__background {
    transition: 0.2s ease-in-out;
    border-radius: inherit;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(var(--vm-background), 1);
  }

  &--container {
    min-height: 50px;
    flex-wrap: wrap;

    &,
    &__title,
    &__items,
    &__static {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__spacer {
      flex-grow: 1;
    }

    &__static,
    &__cross {
      margin-left: 10px;
    }

    &__title {
      margin-left: -10px;
      padding: 0 10px;
      font-weight: bold;
    }

    &__cross {
      cursor: pointer;
      position: relative;

      height: 50px;
      width: 50px;
      margin-right: -12px;
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
  }
}

.appear-enter,
.appear-leave-to {
  opacity: 0;
}

.appear-leave-active,
.appear-enter-active {
  transition: 0.3s ease-in-out;
}
.appear-leave-active {
  transition-delay: 0.15s;
}
</style>
