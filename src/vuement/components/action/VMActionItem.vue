<template>
  <div
    class="vm-action-item"
    @click.stop="handleClick"
    :disabled="disabled"
    :style="{ '--vm-color': vmColor }"
  >
    <div class="vm-action-item__title">
      <slot>{{ title }}</slot>
    </div>
    <div class="vm-action-item__icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon" :class="icon" />
      </slot>
    </div>
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

  margin: 0;
  font-weight: 500;
  padding: 5px 15px;
  color: rgba(var(--vm-color), 0.8);

  position: relative;
  user-select: none;

  transition: 0.1s ease-in-out;

  cursor: pointer;
  &:not([disabled]):hover {
    color: rgba(var(--vm-color), 1);
    background: rgba(var(--vm-color), 0.12);
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &__icon {
    margin-left: 15px;
  }

  &__title {
    white-space: nowrap;
  }
}
</style>
