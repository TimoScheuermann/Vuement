<template>
  <div
    class="vm-action-item"
    @click="clicked"
    :disabled="disabled"
    :style="{
      '--vm-color': vmColor,
    }"
  >
    <span>{{ title }}</span>
    <i :class="icon" />
  </div>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class VMActionItem extends Mixins(VMLinkMixin, VMCProp) {
  @Prop() icon!: string;
  @Prop() title!: string;
}
</script>

<style lang="scss" scoped>
.vm-action-item {
  display: grid;
  grid-template-columns: 1fr 20px;
  padding: 5px;
  color: rgba(var(--vm-color), 1);

  cursor: pointer;
  position: relative;
  user-select: none;

  transition: 0.1s ease-in-out;

  &:not([disabled]):hover {
    background: rgba(var(--vm-color), 0.12);
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  & + .vm-action-item::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: currentColor;
    opacity: 0.1;
  }

  i {
    display: grid;
    place-content: center;
  }

  span {
    display: grid;
    place-content: center start;
    white-space: nowrap;
    padding-left: 5px;
    padding-right: 15px;
  }
}
</style>
