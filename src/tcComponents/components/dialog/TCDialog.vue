<template>
  <transition name="appear" appear :delay="300">
    <div class="tc-dialog" v-if="visible" @click="close" @touchmove.prevent>
      <transition name="slide" appear>
        <div class="tc-dialog--dialog" @click.prevent.stop>
          <div class="tc-dialog--dialog__background" />
          <div class="tc-dialog--dialog__title" v-if="title">{{ title }}</div>
          <div class="tc-dialog--dialog__items">
            <slot />
          </div>
          <div class="tc-dialog--dialog__buttons" v-if="$slots.buttons">
            <slot name="buttons" />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCDialog extends Vue {
  @Prop() title!: string;

  public visible = false;

  mounted(): void {
    this.$on('close', this.close);
  }

  public close(): void {
    this.visible = false;
  }
}
</script>

<style lang="scss" scoped>
.tc-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;

  background: rgba(#000, 0.25);

  &--dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 200px;

    max-width: 90vw;
    max-height: 90vh;

    padding: 20px;
    border-radius: #{2 * $border-radius};
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      backdrop-filter: saturate(180%) blur(20px);
      &__background {
        opacity: 0.85;
      }
    }

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--tc-paragraph);
      border-radius: inherit;
    }

    &__title,
    &__items,
    &__buttons {
      position: relative;
    }

    &__title {
      font-weight: bold;
      font-size: 22px;
      margin-bottom: 10px;
    }

    &__buttons {
      margin: 20px -20px -20px;
      border-radius: inherit;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      overflow: hidden;

      border-top: 1px solid rgba(129, 129, 129, 0.5);

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
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s cubic-bezier(0.97, 1.61, 0.43, 0.69);
}
</style>
