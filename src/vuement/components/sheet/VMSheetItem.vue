<template>
  <div class="vm-sheet-item" @click.stop="handleClick">
    <div class="vm-sheet-item---media">
      <slot />
      <i v-if="icon && !$slots.default" :class="icon" />
    </div>
    <div class="vm-sheet-item--title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class VMSheetItem extends Mixins(VMLinkMixin) {
  @Prop() title!: string;
  @Prop() icon!: string;

  public handleClick(e: MouseEvent): void {
    this.clicked(e);
    if (!this.disabled) {
      this.$parent.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-sheet-item {
  display: grid;
  grid-template-columns: minmax(0, auto) 1fr;
  grid-gap: 10px;
  &--media {
    display: grid;
    place-content: center;
  }
  &--title {
    font-weight: 500;
  }
  padding: 5px 0;
}
</style>
