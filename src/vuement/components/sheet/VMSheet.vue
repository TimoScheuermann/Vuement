<template>
  <transition name="appear" appear :delay="300">
    <div
      class="vm-sheet"
      v-if="visible"
      @click.stop="close"
      @touchmove.self.prevent
      @wheel.self.prevent
      @mousewheel.self.prevent
      @DOMMouseScroll.self.prevent
    >
      <transition name="slide" appear>
        <div class="vm-sheet--sheet" @click.prevent.stop>
          <div class="vm-sheet--sheet__dragger" v-touch:swipe.bottom="close" />
          <div class="vm-sheet--sheet__title" v-if="title">{{ title }}</div>
          <div class="vm-sheet--sheet__items">
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class VMSheet extends Vue {
  @Prop() title!: string;
  @Prop() value!: boolean;

  public visible = !!this.value;

  mounted(): void {
    this.$on('close', this.close);
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
.vm-sheet {
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
  z-index: 200;

  &--sheet {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: calc(90vw);
    max-width: 400px;
    border-radius: 39px 39px 0 0;
    background: var(--vm-background);

    padding: 0px 5vw calc(20px + env(safe-area-inset-bottom)) 5vw;

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
      font-size: 26px;
      margin-bottom: 20px;
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
  transform: translate(-50%, 100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-in-out;
}
</style>
