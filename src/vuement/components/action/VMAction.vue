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
      <div class="vm-action--items" :pos="pos" v-if="visible">
        <div class="vm-action--items__background" />
        <div class="vm-action--items__title" v-if="title">{{ title }}</div>
        <div class="vm-action--items__items"><slot /></div>
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

  public pos = '';
  public vmOpensGroup = 'menu';

  mounted(): void {
    window.addEventListener('scroll', this.updatePosition);
    window.addEventListener('resize', this.updatePosition);
    window.addEventListener('click', this.close);
    this.updatePosition();
  }

  beforeDestroy(): void {
    window.removeEventListener('scroll', this.updatePosition);
    window.removeEventListener('resize', this.updatePosition);
    window.removeEventListener('click', this.close);
  }

  @Watch('visible')
  visibleChanged(): void {
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
    transform: translateY(0.1em);
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
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    z-index: 50;
    font-size: 1rem;

    @include backdrop-blur();

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

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      background: rgba(var(--vm-container), 1);
    }

    &__title {
      padding: 5px 10px;
      opacity: 0.75;
      font-size: 14px;
      position: relative;
    }

    &__items {
      max-height: calc(50vh - 50px);
      overflow: auto;
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
