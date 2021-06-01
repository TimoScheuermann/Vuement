<template>
  <div
    class="vm-sidebar-item"
    @click="clicked"
    :active="isUrlActive"
    :disabled="disabled"
    :style="{
      '--vm-primary': vmColor,
      '--vm-container': vmBackground,
    }"
  >
    <div class="vm-sidebar-item__background" />
    <div class="vm-sidebar-item__icon" v-if="icon">
      <i :class="icon" />
    </div>
    <div class="vm-sidebar-item__title" v-if="title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import VMColorMixin from '@/vuement/mixins/VMColor.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class VMSidebarItem extends Mixins(VMLinkMixin, VMColorMixin) {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() color!: string;
  @Prop() background!: string;

  get vmColor(): string | null {
    if (!this.color) return null;
    return this.getColor(this.color);
  }

  get vmBackground(): string | null {
    if (!this.background) return null;
    return this.getColor(this.background);
  }
}
</script>

<style lang="scss" scoped>
.vm-sidebar-item {
  display: flex;
  flex: 1 1 0px;
  justify-content: flex-start;
  align-items: center;

  padding: 5px 10px;
  margin: 2.5px 0;
  cursor: pointer;
  border-radius: $border-radius;

  &__icon ~ &__title {
    margin-left: 15px;
  }
  &__icon,
  &__title {
    position: relative;
    user-select: none;
    transition: 0.2s ease-in-out;
  }

  &[active] {
    color: rgba(var(--vm-primary), 1);
  }

  position: relative;
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(var(--vm-container), 1);
    opacity: 0;
    border-radius: inherit;
    transition: 0.1s ease-in-out;
  }

  &:not([disabled]):hover,
  &[active] {
    .vm-sidebar-item__background {
      opacity: 0.75;
    }
  }
}
</style>
