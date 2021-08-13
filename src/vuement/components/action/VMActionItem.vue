<template>
  <VMClickable
    class="vm-action-item"
    @click.stop="handleClick"
    :style="{ '--vm-color': vmColor }"
    :disabled="disabled"
    fallback="button"
    :href="href"
    :routeName="routeName"
    :to="to"
  >
    <div class="vm-action-item__title">
      <slot>{{ title }}</slot>
    </div>
    <div class="vm-action-item__icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon" :class="icon" />
      </slot>
    </div>
  </VMClickable>
</template>

<script lang="ts">
import VMClickable from '@/vuement/mixins/VMClickable.vue';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component<VMActionItem>({
  name: 'vmActionItem',
  components: {
    VMClickable,
  },
})
export default class VMActionItem extends Mixins(VMLinkMixin, VMCProp) {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop({ default: true }) closeOnClick!: boolean;

  public handleClick(e: MouseEvent): void {
    this.clicked(e);

    if (!this.disabled && this.closeOnClick) {
      this.$parent.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-action-item {
  @include vm-clickable();

  transform: scale(var(--vm-action-scale));

  width: 100%;
  box-sizing: border-box;
  padding: 5px 15px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  font-weight: 500;
  color: rgba(var(--vm-color), 0.8);

  position: relative;
  user-select: none;
  transition: 0.1s ease-in-out;

  cursor: pointer;
  &:not([disabled]):hover {
    color: rgba(var(--vm-color), 1);
    background: rgba(var(--vm-color), 0.12);
  }

  &:first-child {
    border-top: {
      left-radius: $border-radius;
      right-radius: $border-radius;
    }
  }
  &:last-child {
    border-bottom: {
      left-radius: $border-radius;
      right-radius: $border-radius;
    }
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
