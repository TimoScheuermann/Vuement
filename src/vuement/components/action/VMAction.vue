<template>
  <button
    class="vm-action"
    :style="{ '--vm-color': vmColor, '--vm-container': vmBackground }"
  >
    <span ref="trigger" @click.stop.capture="toggleVisible">
      <slot name="trigger">
        <div class="vm-action--trigger">
          <VMMenuButton
            :icon="icon"
            :border="border"
            :filled="filled"
            :color="color"
          />
        </div>
      </slot>
    </span>

    <transition name="appear">
      <div class="vm-action--items" :shrink="shrink" :pos="pos" v-if="visible">
        <div class="vm-action--items__title" v-if="title">{{ title }}</div>
        <div class="vm-action--items__items">
          <span v-if="title" />
          <slot />
        </div>
      </div>
    </transition>
  </button>
</template>

<script lang="ts">
import { getContainerPosition } from '@/vuement/dev/util';
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMOpensMixin from '@/vuement/mixins/VMOpens.mixin';
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import VMMenuButton from '../menuButton/VMMenuButton.vue';

@Component({
  components: {
    VMMenuButton,
  },
})
export default class VMAction extends Mixins(VMCProp, VMBgProp, VMOpensMixin) {
  @Prop({ default: 'dots-v' }) icon!: string;
  @Prop({ default: false }) border!: string;
  @Prop({ default: false }) filled!: string;
  @Prop() title!: string;

  public shrink = false;
  public pos = '';
  public vmOpensGroup = 'menu';

  mounted(): void {
    window.addEventListener('scroll', this.updatePosition);
    window.addEventListener('resize', this.updatePosition);
    window.addEventListener('click', this.close);
    this.$on('shrink', (shrink: boolean) => {
      this.shrink = shrink;
    });
    this.updatePosition();
  }

  beforeDestroy(): void {
    window.removeEventListener('scroll', this.updatePosition);
    window.removeEventListener('resize', this.updatePosition);
    window.removeEventListener('click', this.close);
  }

  @Watch('visible')
  visibleChanged(): void {
    if (this.visible) {
      this.shrink = false;
      this.updatePosition();
    } else {
      setTimeout(() => {
        this.shrink = false;
      }, 300);
    }
  }

  public updatePosition(): void {
    this.pos = getContainerPosition(this.$refs.trigger);
  }
}
</script>
<style lang="scss">
.vm-action {
  span > .vm-menu-button {
    transform: translateY(0.1em);
  }
  .vm-action--items {
    .vm-spacer {
      background: rgba(var(--vm-border), 1);
      margin: 0;
    }
    .vm-spacer + .vm-action-item {
      border-top: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.vm-action {
  @include vm-button();

  display: inline-block;
  position: relative;

  $size: 29.33px;

  color: rgba(var(--vm-color), 1);

  .vm-action--trigger {
    cursor: pointer;
    background: rgba(var(--vm-container), 1);
    height: $size;
    width: $size;
    border-radius: $size;
    display: inline-grid;
    place-content: center;

    transition: 0.2s ease-in-out;
    font-size: $size;

    &:active {
      filter: brightness(105%);
      transform: scale(0.85);
    }
  }

  &--items {
    position: absolute;
    border-radius: $border-radius;
    // overflow: hidden;
    transition: all 0.2s ease-in-out;
    z-index: 50;
    font-size: 1rem;

    box-shadow: inset 0 0 0 1.5px rgba(var(--vm-container), 0.5);
    background: rgba(var(--vm-container), 1);
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      background: rgba(var(--vm-container), 0.52);
      backdrop-filter: saturate(180%) blur(20px);
    }

    &[pos='tl'] {
      top: 0;
      left: #{$size + 2.5px};
      transform-origin: top left;
    }
    &[pos='tr'] {
      top: 0;
      right: #{$size + 2.5px};
      transform-origin: top right;
    }
    &[pos='bl'] {
      bottom: 0;
      left: #{$size + 2.5px};
      transform-origin: bottom left;
    }
    &[pos='br'] {
      bottom: 0;
      right: #{$size + 2.5px};
      transform-origin: bottom right;
    }

    &[shrink] {
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform: scale(0.9);
      filter: brightness(90%);
      pointer-events: none;
    }

    &__title {
      padding: 7.5px 10px;
      opacity: 0.75;
      font-size: 12px;
      font-weight: 500;
      position: relative;
      color: rgba(var(--vm-color), 0.8);
      border-bottom: 1.5px solid rgba(var(--vm-border), 1);
    }

    &__items {
      position: relative;
      @include vm-scrollbar();
      max-height: calc(50vh - 50px);
      // overflow: auto;
      min-width: 135px;
    }
  }
}

.appear-enter-active {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.appear-leave-active {
  transition: all 0.3 ease;
}
.appear-enter,
.appear-leave-to {
  transform: scale(0.5, 0);
  opacity: 0;
}
</style>
