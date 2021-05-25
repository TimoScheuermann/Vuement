<template>
  <div
    class="vm-tabbar-item"
    @click="clicked"
    :style="vmColor"
    :active="isUrlActive"
    :disabled="disabled"
  >
    <div class="vm-tabbar-item__icon" v-if="icon">
      <i :class="icon" />
    </div>
    <div class="vm-tabbar-item__title" v-if="title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { getColor } from '@/vuement/util';

@Component
export default class VMTabbarItem extends Mixins(VMLinkMixin) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop({ default: 'primary' }) color!: string;

  get vmColor(): string {
    return `--vm-color:${getColor(this.color)};`;
  }
}
</script>

<style lang="scss" scoped>
.vm-tabbar-item {
  cursor: pointer;
  opacity: 0.6;

  display: flex;
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;

  @media only screen and(max-width: 650px) {
    flex-direction: column;
  }

  &__icon,
  &__title {
    padding: 0 5px;
    height: 20px;
    line-height: 20px;
    transition: all 0.2s ease-in-out;
  }

  &[disabled] {
    cursor: not-allowed;
  }

  &[active] {
    .vm-tabbar-item__icon,
    .vm-tabbar-item__title {
      color: var(--vm-color);
    }
    opacity: 1;
  }

  &:not([disabled]):hover {
    opacity: 1;
  }
}
</style>
