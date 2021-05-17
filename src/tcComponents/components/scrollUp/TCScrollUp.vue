<template>
  <transition appear name="appear">
    <div
      class="tc-scroll-up"
      v-if="visible"
      :style="scrollUpColor + scrollUpBackground"
      @click="scrollUp"
    >
      <i :class="icon" v-if="icon"></i>
    </div>
  </transition>
</template>

<script lang="ts">
import { getColor } from '@/tcComponents/util';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCScrollUp extends Vue {
  @Prop({ default: 'ti-chevron-up' }) icon!: string;
  @Prop({ default: 'primary' }) background!: string;
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

  get scrollUpColor(): string {
    return `--tc-color:${getColor(this, this.color)};`;
  }

  get scrollUpBackground(): string {
    return `--tc-background:${getColor(this, this.background)};`;
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
.tc-scroll-up {
  position: fixed;
  z-index: 200;
  bottom: calc(60px + env(safe-area-inset-bottom));
  right: calc(10px + env(safe-area-inset-right));

  $scale: 40px;
  height: $scale;
  width: $scale;
  border-radius: $scale;

  background: var(--tc-background);
  color: var(--tc-color);

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
