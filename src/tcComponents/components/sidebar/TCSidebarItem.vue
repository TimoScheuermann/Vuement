<template>
  <div
    class="tc-sidebar-item"
    @click="clicked"
    :style="tcColor"
    :active="isUrlActive"
    :disabled="disabled"
  >
    <div class="tc-sidebar-item__background" />
    <div class="tc-sidebar-item__icon" v-if="icon">
      <i :class="icon" />
    </div>
    <div class="tc-sidebar-item__title" v-if="title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import TCLinkMixin from '@/tcComponents/mixins/TCLink.mixin';
import { getColor } from '@/tcComponents/util';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class TCSidebarItem extends Mixins(TCLinkMixin) {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop({ default: 'primary' }) color!: string;

  get tcColor(): string {
    return `--tc-color:${getColor(this, this.color)};`;
  }
}
</script>

<style lang="scss" scoped>
.tc-sidebar-item {
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
    color: var(--tc-color);
  }

  position: relative;
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--tc-container);
    opacity: 0;
    border-radius: inherit;
    transition: 0.1s ease-in-out;
  }

  &:not([disabled]):hover,
  &[active] {
    .tc-sidebar-item__background {
      opacity: 0.75;
    }
  }
}
</style>
