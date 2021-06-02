<template>
  <transition name="appear" appear :delay="300">
    <div
      class="vm-dialog"
      v-if="visible"
      @click.stop="close"
      @touchmove.self.prevent
      @wheel.self.prevent
      @mousewheel.self.prevent
      @DOMMouseScroll.self.prevent
      :style="{
        '--vm-color': vmColor,
        '--vm-background': vmBackground,
        '--vm-border': vmBorder,
      }"
    >
      <transition name="slide" appear>
        <div class="vm-dialog--dialog" @click.prevent.stop>
          <div
            class="vm-dialog--dialog__dragger"
            v-touch:swipe.bottom="close"
          />
          <div class="vm-dialog--dialog__title" v-if="title">{{ title }}</div>
          <div class="vm-dialog--dialog__items">
            <slot />
          </div>
          <div class="vm-dialog--dialog__buttons" v-if="$slots.buttons">
            <slot name="buttons" />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';

@Component
export default class VMDialog extends Mixins(VMCProp, VMBgProp) {
  @Prop() title!: string;
  @Prop() value!: boolean;
  @Prop() border!: string;

  public visible = !!this.value;

  mounted(): void {
    this.$on('close', this.close);
  }

  get vmBorder(): string | null {
    return this.border ? this.getColor(this.border) : null;
  }

  @Watch('value', { immediate: true })
  valueChanged(): void {
    this.visible = !!this.value;
  }

  @Watch('visible', { immediate: true })
  visibleChanged(): void {
    this.$emit('input', this.visible);
  }

  public close(): void {
    this.visible = false;
  }
}
</script>

<style lang="scss" scoped>
.vm-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  color: rgba(var(--vm-color), 1);

  background: rgba(#000, 0.85);
  @supports (backdrop-filter: saturate(180%) blur(20px)) {
    backdrop-filter: saturate(180%) blur(10px);
    background: rgba(#000, 0.65);
  }

  &--dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 200px;

    max-width: 90vw;
    max-height: 90vh;

    padding: 20px;
    padding-top: 0px;
    border-radius: #{2 * $border-radius};
    background: rgba(var(--vm-background), 1);

    &__title,
    &__items,
    &__buttons {
      position: relative;
    }

    &__dragger {
      position: relative;
      height: 20px;
      width: 100%;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 3px;
        border-radius: 10px;
        width: 40%;
        max-width: 200px;
        background: currentColor;
        opacity: 0.5;
      }
    }

    &__title {
      font-weight: bold;
      font-size: 22px;
      margin-bottom: 10px;
    }

    &__buttons {
      margin: 15px -20px -20px;
      border-radius: inherit;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      overflow: hidden;

      border-top: 1.5px solid rgba(var(--vm-border), 1);

      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
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

.slide-enter,
.slide-leave-to {
  transform: translate(-50%, 0%);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-in-out;
}
</style>
