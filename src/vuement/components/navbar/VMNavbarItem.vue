<template>
  <div
    class="vm-navbar-item"
    @click="clicked"
    :style="vmColor"
    :active="isUrlActive"
    :disabled="disabled"
  >
    <div class="vm-navbar-item__icon" v-if="icon && !iconTrailing">
      <i :class="icon" />
    </div>
    <div class="vm-navbar-item__title" v-if="title">{{ title }}</div>
    <div class="vm-navbar-item__icon" v-if="icon && iconTrailing">
      <i :class="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { getColor } from '@/vuement/util';

@Component
export default class VMNavbarItem extends Mixins(VMLinkMixin) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() iconTrailing!: boolean;
  @Prop({ default: 'primary' }) color!: string;

  get vmColor(): string {
    return `--vm-color:${getColor(this.color)};`;
  }
}
</script>

<style lang="scss" scoped>
.vm-navbar-item {
  display: flex;
  flex-wrap: nowrap;
  margin-left: 10px;
  padding: 0 5px;

  &__icon ~ &__title,
  &__title ~ &__icon {
    margin-left: 5px;
  }

  cursor: pointer;
  transition: all 0.2s ease-in-out;
  opacity: 0.6;

  &[disabled] {
    cursor: not-allowed;
  }

  position: relative;
  line-height: 40px;
  &::before {
    position: absolute;
    content: '';
    left: 0;
    bottom: -5px;
    width: 0%;
    height: 2px;
    background: var(--vm-color);
    transition: inherit;
  }

  &[active] {
    .vm-navbar-item__icon,
    .vm-navbar-item__title {
      color: var(--vm-color);
    }
    opacity: 1;
    &::before {
      width: 100%;
    }
  }

  &:not([disabled]):hover {
    opacity: 1;
  }
}
</style>
