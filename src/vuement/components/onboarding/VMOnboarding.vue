<template>
  <span>
    <transition name="appear">
      <div
        class="vm-onboarding"
        v-if="visible"
        @touchmove.prevent
        @wheel.prevent
        @mousewheel.prevent
        @DOMMouseScroll.prevent
      >
        <div class="vm-onboarding--head">
          <slot name="head" />
        </div>
        <div
          ref="slider"
          class="vm-onboarding--views"
          @touchmove.capture.stop
          @wheel.capture.stop
          @mousewheel.capture.stop
          @DOMMouseScroll.capture.stop
        >
          <slot />
        </div>
        <div class="vm-onboarding--indicator" v-if="view !== -1">
          <span
            v-for="(_, i) in Array(slides)"
            :key="i"
            :current="i === view"
          />
        </div>
        <div class="vm-onboarding--footer">
          <slot name="footer" />
        </div>
      </div>
    </transition>
  </span>
</template>

<script lang="ts">
import VMBodyMountMixin from '@/vuement/mixins/VMBodyMount.mixin';
import VMOpensMixin from '@/vuement/mixins/VMOpens.mixin';
import { Component, Mixins, Watch } from 'vue-property-decorator';

@Component
export default class VMOnboarding extends Mixins(
  VMOpensMixin,
  VMBodyMountMixin
) {
  public vmOpensGroup = 'onboarding';
  public view = -1;

  mounted(): void {
    this.slider.addEventListener('scroll', this.scrolled);
    this.scrolled();
  }

  beforeDestroy(): void {
    this.slider.removeEventListener('scroll', this.scrolled);
  }

  @Watch('visible')
  public scrolled(): void {
    const { scrollWidth, scrollLeft } = this.slider;
    if (this.slides === 0) {
      this.view = -1;
    } else {
      const slideWidth = scrollWidth / this.slides;
      this.view = Math.floor(scrollLeft / slideWidth + 0.5);
    }
  }

  get slides(): number {
    return (this.$slots.default || []).length;
  }

  get slider(): HTMLElement {
    return this.$refs.slider as HTMLElement;
  }
}
</script>

<style lang="scss" scoped>
.vm-onboarding {
  position: fixed;
  z-index: 1400;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(var(--vm-background), 1);

  display: flex;
  flex-direction: column;

  &--views {
    display: flex;
    width: 100vw;
    overflow: scroll visible;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    flex-grow: 1;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &--indicator {
    flex-shrink: 0;
    $scale: 10px;
    display: flex;
    margin: 10px auto;
    span {
      height: $scale;
      width: $scale;
      border-radius: $scale;
      margin: 0 10px;
      background: rgba(var(--vm-color), 0.5);
      transition: background 0.2s ease-in-out 0.1s;
      &[current] {
        background: rgba(var(--vm-primary), 1);
      }
    }
  }

  &--head {
    flex-shrink: 0;
    padding: 0 5vw;
    padding-top: env(safe-area-inset-top);
  }
  &--footer {
    flex-shrink: 0;
    padding: 0 5vw;
    padding-bottom: env(safe-area-inset-bottom);
  }
}

.appear-enter-active {
  transition: all 0.4s ease-out;
}
.appear-leave-active {
  transition: all 0.4s linear;
}
.appear-enter {
  transform: translateY(100%);
}
.appear-leave-to {
  opacity: 0;
}
</style>
