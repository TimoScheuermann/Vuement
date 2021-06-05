<template>
  <div
    class="vm-tabbar-item"
    @click="clicked"
    :active="isUrlActive"
    :disabled="disabled"
    :style="{ '--vm-primary': vmColor }"
  >
    <slot>
      <span class="vm-tabbar-item__icon" v-if="icon">
        <i :class="icon" />
      </span>
      <span v-if="title">{{ title }}</span>
    </slot>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';

@Component
export default class VMTabbarItem extends Mixins(VMLinkMixin, VMCProp) {
  @Prop() title!: string;
  @Prop() icon!: string;
}
</script>

<style lang="scss" scoped>
.vm-tabbar-item {
  cursor: pointer;
  opacity: 0.5;

  display: flex;
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;

  @media only screen and(max-width: 650px) {
    flex-direction: column;
    span {
      margin-top: 4px;
    }
  }

  &__icon {
    margin: 0 5px;
    display: grid;
    place-content: center;
    height: 24px;
    width: 24px;
    i {
      font-size: 24px;
    }
  }
  span {
    font-size: 11px;
    font-weight: 500;
    margin: 0 5px;
  }

  &[disabled] {
    cursor: not-allowed;
  }

  transition: all 0.2s ease-in-out;
  &[active] {
    color: rgba(var(--vm-primary), 1);
    opacity: 1;
  }

  &:not([disabled]):hover {
    opacity: 1;
  }
}
</style>
