<template>
  <div
    class="vm-action-item"
    @click.stop="handleClick"
    :disabled="disabled"
    :style="{ '--vm-color': vmColor }"
  >
    <span>{{ title }}</span>
    <i v-if="icon" :class="icon" />
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

  public handleClick(e: MouseEvent): void {
    this.clicked(e);
    if (!this.disabled) {
      this.$parent.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-action-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  padding: 5px 10px;
  color: rgba(var(--vm-color), 0.8);

  position: relative;
  user-select: none;

  transition: 0.1s ease-in-out;

  cursor: pointer;
  &:not([disabled]):hover {
    color: rgba(var(--vm-color), 1);
    background: rgba(var(--vm-color), 0.12);
  }

  &:first-child {
    border-radius: $border-radius $border-radius 0 0;
  }
  &:last-child {
    border-radius: 0 0 $border-radius $border-radius;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  & ~ .vm-action-item,
  & ~ /deep/ .vm-action-group {
    border-top: 1.5px solid rgba(var(--vm-border), 1);
  }

  span {
    white-space: nowrap;
    padding: 0 15px;
  }
}
</style>
