<template>
  <div
    class="tc-tabbar-item"
    @click="clicked"
    :style="tcColor"
    :active="isUrlActive"
    :disabled="disabled"
  >
    <div class="tc-tabbar-item__icon" v-if="icon">
      <i :class="icon" />
    </div>
    <div class="tc-tabbar-item__title" v-if="title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import TCLinkMixin from '@/tcComponents/mixins/TCLink.mixin';
import { getColor } from '@/tcComponents/util';

@Component
export default class TCTabbarItem extends Mixins(TCLinkMixin) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop({ default: 'primary' }) color!: string;

  get tcColor(): string {
    return `--tc-color:${getColor(this, this.color)};`;
  }
}
</script>

<style lang="scss" scoped>
.tc-tabbar-item {
  cursor: pointer;
  opacity: 0.6;

  display: flex;
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;

  @media only screen and(max-width: 650px) {
    flex-direction: column;
  }

  &__icon,
  &__title {
    padding: 0 5px;
    height: 20px;
    line-height: 20px;
    transition: all 0.2s ease-in-out;
  }

  &[disabled] {
    cursor: not-allowed;
  }

  &[active] {
    .tc-tabbar-item__icon,
    .tc-tabbar-item__title {
      color: var(--tc-color);
    }
    opacity: 1;
  }

  &:not([disabled]):hover {
    opacity: 1;
  }
}
</style>
