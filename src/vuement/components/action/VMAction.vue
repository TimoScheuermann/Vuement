<template>
  <div class="vm-action">
    <div
      class="vm-action__icon"
      ref="trigger"
      @click.stop.capture="visible = !visible"
      :style="{
        '--vm-color': vmColor,
        '--vm-container': vmBackground,
      }"
    >
      <i :class="icon" @click.stop />
    </div>
    <transition name="appear">
      <div
        class="vm-action--items"
        :pos="pos"
        :style="actionStyles"
        v-if="visible"
      >
        <div class="vm-action--items__background" />
        <div class="vm-action--items__title" v-if="title">{{ title }}</div>
        <div class="vm-action--items__items"><slot /></div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { getContainerPosition } from '@/vuement/dev/util';
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';

@Component
export default class VMAction extends Mixins(VMCProp, VMBgProp) {
  @Prop({ default: 'ti-dots-vertical' }) icon!: string;
  @Prop() title!: string;
  @Prop({ default: false }) value!: boolean;

  public visible = !!this.value;
  public pos = '';

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
    this.$emit('input', this.visible);
  }

  @Watch('value')
  valueChanged(): void {
    this.visible = this.value;
  }

  public updatePosition(): void {
    this.pos = getContainerPosition(this.$refs.trigger);
  }

  public close(): void {
    this.visible = false;
  }
}
</script>

<style lang="scss" scoped>
.vm-action {
  display: inline-block;
  position: relative;

  $size: 29.33px;

  color: rgba(var(--vm-color), 1);

  &__icon {
    background: rgba(var(--vm-container), 1);
    height: $size;
    width: $size;
    border-radius: $size;
    display: grid;
    place-content: center;
    cursor: pointer;

    transition: 0.2s ease-in-out;
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
