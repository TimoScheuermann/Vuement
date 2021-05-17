<template>
  <div class="tc-action-item" @click="clicked" :disabled="disabled">
    <span :style="actionItemColor">{{ title }}</span>
    <i :class="icon" :style="actionItemColor" />
  </div>
</template>

<script lang="ts">
import TCLinkMixin from '@/tcComponents/mixins/TCLink.mixin';
import { getColor } from '@/tcComponents/util';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class TCActionItem extends Mixins(TCLinkMixin) {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() color!: string;

  get actionItemColor(): string | null {
    if (!this.color) return null;
    return `--tc-color:${getColor(this, this.color)};`;
  }
}
</script>

<style lang="scss" scoped>
.tc-action-item {
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

  & ~ .tc-action-item::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: var(--tc-color);
    opacity: 0.1;
  }

  i,
  span {
    color: var(--tc-color);
  }

  i {
    display: grid;
    place-content: center;
  }

  span {
    display: grid;
    place-content: center start;
    white-space: nowrap;
    padding: 0 5px;
  }
}
</style>
