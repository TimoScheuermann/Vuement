<template>
  <div
    class="vm-dialog-button"
    @click.stop="handleClick"
    :disabled="disabled"
    :style="{ '--vm-color': vmColor }"
  >
    <div class="vm-dialog-button--icon" v-if="icon">
      <i :class="icon" />
    </div>
    <div class="vm-dialog-button--image" v-else-if="image">
      <img :src="image" alt="" />
    </div>
    <div class="vm-dialog-button--title" v-if="title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component
export default class VMDialogButton extends Mixins(VMLinkMixin, VMCProp) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() image!: string;

  public handleClick(e: MouseEvent): void {
    this.clicked(e);
    if (!this.disabled) {
      this.$parent.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-dialog-button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0px;
  flex-wrap: nowrap;
  cursor: pointer;

  color: rgba(var(--vm-color), 1);

  min-width: 80px;

  padding: 0 10px;
  min-height: 45px;

  &:not(:first-child) {
    border-left: 1.5px solid rgba(var(--vm-border), 1);
  }

  transition: 0.1s ease-in-out;
  &:not([disabled]) {
    &:hover {
      background: rgba(var(--vm-color), 0.12);
    }
    &:active {
      filter: brightness(150%);
    }
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--icon,
  &--image,
  &--title {
    user-select: none;
    margin: 0 5px;
  }
}
</style>
