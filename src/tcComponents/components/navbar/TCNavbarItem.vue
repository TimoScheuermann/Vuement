<template>
  <div
    class="tc-navbar-item"
    @click="clicked"
    :style="tcColor"
    :active="isUrlActive"
    :disabled="disabled"
  >
    <div class="tc-navbar-item__icon" v-if="icon && !iconTrailing">
      <i :class="icon" />
    </div>
    <div class="tc-navbar-item__title" v-if="title">{{ title }}</div>
    <div class="tc-navbar-item__icon" v-if="icon && iconTrailing">
      <i :class="icon" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import TCLinkMixin from '@/tcComponents/mixins/TCLink.mixin';
import { getColor } from '@/tcComponents/util';

@Component
export default class TCNavbarItem extends Mixins(TCLinkMixin) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() iconTrailing!: boolean;
  @Prop({ default: 'primary' }) color!: string;

  get tcColor(): string {
    return `--tc-color:${getColor(this, this.color)};`;
  }
}
</script>

<style lang="scss" scoped>
.tc-navbar-item {
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
    background: var(--tc-color);
    transition: inherit;
  }

  &[active] {
    .tc-navbar-item__icon,
    .tc-navbar-item__title {
      color: var(--tc-color);
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
