<template>
  <div
    class="tc-dialog-button"
    @click.stop="handleClick"
    :style="tcColor"
    :disabled="disabled"
  >
    <div class="tc-dialog-button--icon" v-if="icon">
      <i :class="icon" />
    </div>
    <div class="tc-dialog-button--image" v-else-if="image">
      <img :src="image" alt="" />
    </div>
    <div class="tc-dialog-button--title" v-if="title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import TCLinkMixin from '@/tcComponents/mixins/TCLink.mixin';
import { getColor } from '@/tcComponents/util';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component
export default class TCDialogButton extends Mixins(TCLinkMixin) {
  @Prop({ default: 'Hello' }) title!: string;
  @Prop() color!: string;
  @Prop({ default: 'ti-dots' }) icon!: string;
  @Prop() image!: string;

  public handleClick(e: MouseEvent): void {
    this.clicked(e);
    if (!this.disabled) {
      this.$parent.$emit('close');
    }
  }

  get tcColor(): string | null {
    if (!this.color) return null;
    return `--tc-color:${getColor(this, this.color)}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-dialog-button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0px;
  flex-wrap: nowrap;
  cursor: pointer;

  color: var(--tc-color);

  min-width: 80px;

  padding: 0 10px;
  min-height: 50px;

  &:not(:first-child) {
    border-left: 1px solid rgba(129, 129, 129, 0.5);
  }

  transition: 0.1s ease-in-out;
  &:not([disabled]) {
    &:hover {
      background: rgba(129, 129, 129, 0.2);
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
