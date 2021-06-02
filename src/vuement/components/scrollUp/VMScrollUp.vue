<template>
  <transition appear name="appear">
    <div
      v-if="visible"
      class="vm-scroll-up"
      @click="scrollUp"
      :style="{ '--vm-primary': vmBackground, '--vm-color': vmColor }"
    >
      <i :class="icon" v-if="icon"></i>
    </div>
  </transition>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class VMScrollUp extends Mixins(VMCProp, VMBgProp) {
  @Prop({ default: 'ti-chevron-up' }) icon!: string;
  @Prop({ default: 'white' }) color!: string;
  @Prop({ default: 200 }) trigger!: number;

  public visible = false;

  mounted(): void {
    this.checkVisible();
    window.addEventListener('scroll', this.checkVisible);
  }

  beforeDestroy(): void {
    window.removeEventListener('scroll', this.checkVisible);
  }

  public checkVisible(): void {
    const { body, documentElement } = document;
    this.visible =
      body.scrollTop > this.trigger || documentElement.scrollTop > this.trigger;
  }

  public scrollUp(): void {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
  }
}
</script>

<style lang="scss" scoped>
.vm-scroll-up {
  position: fixed;
  z-index: 200;
  bottom: calc(60px + env(safe-area-inset-bottom));
  right: calc(10px + env(safe-area-inset-right));

  $scale: 40px;
  height: $scale;
  width: $scale;
  border-radius: $scale;

  background: rgba(var(--vm-primary), 1);
  color: rgba(var(--vm-color), 1);

  display: grid;
  place-content: center;

  opacity: 0.5;
  transform: scale(0.9);
  cursor: pointer;

  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 1;
    transform: scale(1);
  }

  animation: 1s ease-in-out 0s infinite alternate-reverse both shake;

  @keyframes shake {
    0% {
      bottom: calc(60px + env(safe-area-inset-bottom) - 4px);
    }
    100% {
      bottom: calc(60px + env(safe-area-inset-bottom) + 4px);
    }
  }
}

.appear-enter-active,
.appear-leave-active {
  transition: all 0.3s cubic-bezier(0.63, 1.65, 0.42, 0.75);
}
.appear-enter,
.appear-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
