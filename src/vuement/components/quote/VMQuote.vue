<template>
  <div
    class="vm-quote"
    :style="{
      '--vm-color': vmColor,
      '--vm-container': vmBackground,
      '--vm-primary': vmBorder,
    }"
    :key="$vm.theme"
  >
    <div class="vm-quote__background" />
    <div class="vm-quote__bar" />

    <div class="vm-quote--title" v-if="title">{{ title }}</div>
    <div class="vm-quote--content"><slot /></div>
  </div>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component<VMQuote>({
  name: 'vmQuote',
})
export default class VMQuote extends Mixins(VMCProp, VMBgProp) {
  @Prop() title!: string;
  @Prop() border!: string;

  get vmBorder(): string | null {
    return this.border ? this.getColor(this.border) : null;
  }
}
</script>

<style lang="scss" scoped>
.vm-quote {
  position: relative;
  border-radius: $border-radius;
  padding: 10px;
  padding-left: #{$border-radius + 10px};
  color: rgba(var(--vm-color), 1);

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    z-index: -1;
    background: rgba(var(--vm-container), 1);
  }

  &__bar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: $border-radius;
    background: rgba(var(--vm-primary), 1);
    border-radius: inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &--title,
  &--content {
    position: relative;
    z-index: 2;
  }

  &--title {
    margin-bottom: 5px;
    padding-bottom: 5px;
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;
      background: currentColor;
      height: 1px;
      width: 100%;
      right: 0;
      bottom: 0;
      opacity: 0.25;
    }

    &::after {
      content: '\ea75\ea75';
      font-family: 'Timos-Icons';
      position: absolute;
      letter-spacing: -6px;
      right: 6px;
      top: 0;
      font-weight: 900;
      color: rgba(var(--vm-primary), 1);
    }
  }
}
</style>
