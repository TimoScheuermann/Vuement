<template>
  <div class="vm-action-item" @click="clicked" :disabled="disabled">
    <span :style="actionItemColor">{{ title }}</span>
    <i :class="icon" :style="actionItemColor" />
  </div>
</template>

<script lang="ts">
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { getColor } from '@/vuement/util';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class VMActionItem extends Mixins(VMLinkMixin) {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() color!: string;

  get actionItemColor(): string | null {
    if (!this.color) return null;
    return `--vm-color:${getColor(this.color)};`;
  }
}
</script>

<style lang="scss" scoped>
.vm-action-item {
  display: grid;
  grid-template-columns: 1fr 20px;
  padding: 5px;

  cursor: pointer;
  position: relative;
  user-select: none;

  transition: 0.1s ease-in-out;

  &:not([disabled]):hover {
    background: rgba(#111, 0.1);
  }

  &:disabled {
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
    background: var(--vm-color);
    opacity: 0.1;
  }

  i,
  span {
    color: var(--vm-color);
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
