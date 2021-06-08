<template>
  <span>
    <transition name="appear">
      <div v-if="expanded" class="vm-image-fullscreen__background" />
    </transition>
    <span
      :style="{
        '--vm-top': top + 'px',
        '--vm-left': left + 'px',
        '--vm-height': height + 'px',
        '--vm-width': width + 'px',
      }"
    >
      <transition name="scale" @enter="enter" @leave="leave">
        <div v-if="expanded" class="vm-image-fullscreen">
          <img :src="src" :srcset="srcset" />
        </div>
      </transition>
    </span>

    <transition name="overlay">
      <div
        v-if="expanded"
        class="vm-image-fullscreen--overlay"
        @click="close"
        @click.stop="close"
        @touchmove.prevent
        @wheel.prevent
        @mousewheel.prevent
        @DOMMouseScroll.prevent
      >
        <slot>
          <VMMenuButton
            class="vm-image-fullscreen--overlay__close"
            icon="cross"
            :filled="true"
            color="#fff"
            @click.stop="close"
          />
        </slot>
      </div>
    </transition>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import VMMenuButton from '../menuButton/VMMenuButton.vue';

@Component({
  components: {
    VMMenuButton,
  },
})
export default class VMImageFullscreen extends Vue {
  @Prop() src!: string;
  @Prop() srcset!: string;
  @Prop() top!: number;
  @Prop() left!: number;
  @Prop() height!: number;
  @Prop() width!: number;
  @Prop() expanded!: boolean;

  public close(): void {
    this.$emit('close');
  }

  public enter(element: HTMLElement): void {
    element.style.height = 'var(--vm-height)';
    element.style.width = 'var(--vm-width)';
    element.style.top = 'var(--vm-top)';
    element.style.left = 'var(--vm-left)';

    requestAnimationFrame(() => {
      element.style.height = '100vh';
      element.style.width = '100vw';
      element.style.top = '0px';
      element.style.left = '0px';
    });
  }

  public leave(element: HTMLElement): void {
    element.style.height = '100vh';
    element.style.width = '100vw';
    element.style.top = '0px';
    element.style.left = '0px';

    requestAnimationFrame(() => {
      element.style.height = 'var(--vm-height)';
      element.style.width = 'var(--vm-width)';
      element.style.top = 'var(--vm-top)';
      element.style.left = 'var(--vm-left)';
    });
  }
}
</script>

<style lang="scss" scoped>
.vm-image-fullscreen {
  &__background,
  &,
  &--overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  &__background {
    z-index: 2100;
    background: rgba(#000, 0.85);
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      backdrop-filter: saturate(180%) blur(10px);
      background: rgba(#000, 0.65);
    }
  }

  z-index: 2101;

  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }

  &--overlay {
    z-index: 2102;
    &__close {
      position: absolute;
      font-size: 26px;
      top: calc(20px + env(safe-area-inset-top));
      right: calc(20px + env(safe-area-inset-right));
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

.scale-enter,
.scale-leave-to {
  height: var(--vm-height);
  width: var(--vm-width);
  top: var(--vm-top);
  left: var(--vm-left);
}

.scale-leave-active,
.scale-enter-active {
  transition: all 0.2s ease-in-out;
}

.overlay-enter,
.overlay-leave-to {
  opacity: 0;
}

.overlay-leave-active,
.overlay-enter-active {
  transition: 0.2s ease-in-out;
}
.overlay-enter-active {
  transition-delay: 0.1s;
}
</style>
