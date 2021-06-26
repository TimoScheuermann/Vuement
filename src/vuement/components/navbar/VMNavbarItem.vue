<template>
  <VMClickable
    class="vm-navbar-item"
    @click="clicked"
    :style="{ '--vm-primary': vmColor }"
    :active="isUrlActive"
    :disabled="disabled"
    fallback="button"
    :href="href"
    :routeName="routeName"
    :to="to"
  >
    <div class="vm-navbar-item__icon" v-if="icon && !iconTrailing">
      <i :class="icon" />
    </div>
    <div class="vm-navbar-item__title" v-if="title">{{ title }}</div>
    <div class="vm-navbar-item__icon" v-if="icon && iconTrailing">
      <i :class="icon" />
    </div>
  </VMClickable>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMClickable from '@/vuement/mixins/VMClickable.vue';

@Component({
  components: {
    VMClickable,
  },
})
export default class VMNavbarItem extends Mixins(VMLinkMixin, VMCProp) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() iconTrailing!: boolean;
}
</script>

<style lang="scss" scoped>
.vm-navbar-item {
  @include vm-clickable();

  display: flex;
  flex-wrap: nowrap;
  margin-left: 10px;
  padding: 0 5px;

  &__icon ~ &__title,
  &__title ~ &__icon {
    margin-left: 5px;
  }

  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: 0.6;

  &[disabled] {
    cursor: not-allowed;
  }

  position: relative;
  line-height: 40px;

  &::before {
    position: absolute;
    content: '';
    left: 50%;
    transform: translateX(-50%);
    bottom: -5px;
    width: 0%;
    height: 2px;
    max-height: 0px;
    background: rgba(var(--vm-primary), 1);
    transition: inherit;
  }

  &[active] {
    .vm-navbar-item__icon,
    .vm-navbar-item__title {
      color: rgba(var(--vm-primary), 1);
    }
    opacity: 1;
    &::before {
      width: 100%;

      max-height: 2px;
    }
  }

  &:not([disabled]):hover {
    opacity: 1;
  }
}
</style>
