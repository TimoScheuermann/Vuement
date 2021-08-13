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
      <div
        v-if="visible"
        class="vm-action--items"
        :pos="pos"
        :style="{ '--vm-action-scale': scale }"
      >
        <div class="vm-action--items__title" v-if="title">{{ title }}</div>
        <div class="vm-action--items__items">
          <span v-if="title" />
          <slot />
        </div>
      </div>
    </transition>

    <span ref="vm-action-pop-over" />
  </button>
</template>

<script lang="ts">
import { getContainerPosition } from '@/vuement/dev/util';
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMOpensMixin from '@/vuement/mixins/VMOpens.mixin';
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import VMMenuButton from '../menuButton/VMMenuButton.vue';

@Component<VMAction>({
  name: 'vmAction',
  components: {
    VMMenuButton,
  },
})
export default class VMAction extends Mixins(VMCProp, VMBgProp, VMOpensMixin) {
  @Prop({ default: 'dots-v' }) icon!: string;
  @Prop({ default: false }) border!: string;
  @Prop({ default: false }) filled!: string;
  @Prop() title!: string;

  public scale = 1;
  public pos = '';
  public vmOpensGroup = 'menu';

  mounted(): void {
    window.addEventListener('scroll', this.updatePosition);
    window.addEventListener('resize', this.updatePosition);
    window.addEventListener('click', this.close);
    this.updatePosition();

    this.$on('shrink', () => {
      this.scale -= 0.15;
    });
    this.$on('grow', () => {
      this.scale += 0.15;
    });
  }

  beforeDestroy(): void {
    window.removeEventListener('scroll', this.updatePosition);
    window.removeEventListener('resize', this.updatePosition);
    window.removeEventListener('click', this.close);
  }

  @Watch('visible')
  visibleChanged(): void {
    this.scale = 1;
    if (this.visible) this.updatePosition();
  }

  public updatePosition(): void {
    this.pos = getContainerPosition(this.$refs.trigger);
  }
}
</script>

<style lang="scss">
.vm-action {
  span > .vm-menu-button {
    transform: translateY(0.15em);
  }
  .vm-spacer {
    background: rgba(var(--vm-border), var(--vm-action-scale));
    margin: 0;
  }
  .vm-action-item,
  .vm-action-group {
    + {
      .vm-action-item,
      .vm-action-group {
        border-top: 1.5px solid rgba(var(--vm-border), var(--vm-action-scale));
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.vm-action {
  @include vm-clickable();

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

    &__title {
      opacity: calc(var(--vm-action-scale) * 100%);
      font-size: calc(var(--vm-action-scale) * 12px);
      padding: 7.5px 10px;

      font-weight: 500;
      position: relative;
      color: rgba(var(--vm-color), 0.5);
      border-bottom: 1.5px solid rgba(var(--vm-border), 1);
    }

    &__items {
      // @include vm-scrollbar();
      // max-height: calc(50vh - 50px);
      overflow: visible;
    }
  }
}

.appear-enter-active {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.appear-leave-active {
  transition: all 0.3s ease;
}
.appear-enter,
.appear-leave-to {
  transform: scale(0.5, 0);
  opacity: 0;
}
</style>
