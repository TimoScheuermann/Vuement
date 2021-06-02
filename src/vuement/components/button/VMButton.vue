<template>
  <button
    class="vm-button"
    @click.stop="clicked"
    :disabled="disabled"
    :size="size"
    :variant="buttonVariant"
    :style="{
      '--vm-color': vmColor,
      '--vm-primary': vmBackground,
    }"
  >
    <div class="vm-button__icon" v-if="icon && !iconTrailing">
      <i :class="icon" />
    </div>
    <div class="vm-button__title" v-if="title">{{ title }}</div>
    <div class="vm-button__icon" v-if="icon && iconTrailing">
      <i :class="icon" />
    </div>
  </button>
</template>

<script lang="ts">
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';

@Component
export default class VMButton extends mixins(VMLinkMixin, VMCProp, VMBgProp) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop({ default: false }) iconTrailing!: boolean;
  @Prop({ default: 'normal' }) size!: string;
  @Prop({ default: 'filled' }) variant!: string;
  @Prop({ default: 'white' }) color!: string;

  get buttonSize(): string {
    const sizes = ['normal', 'medium', 'large'];
    const size = (this.size || '').toLowerCase();
    return sizes.includes(size) ? size : sizes[0];
  }

  get buttonVariant(): string {
    const variants = ['filled', 'border', 'opaque'];
    const variant = (this.variant || '').toLowerCase();
    return variants.includes(variant) ? variant : variants[0];
  }
}
</script>

<style lang="scss" scoped>
@mixin button-gradient($opacity: 1, $gradient: 0.3) {
  background: rgba(var(--vm-primary), $opacity);
  background: linear-gradient(
      135deg,
      rgba(#fff, $gradient),
      rgba(#000, $gradient)
    ),
    rgba(var(--vm-primary), $opacity);
}

.vm-button {
  display: inline-flex;
  flex: 1 1 0px;

  outline: none;
  background: none;
  font: inherit;
  border: none;

  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
    filter: saturate(25%);
  }

  &:not([disabled]):active {
    filter: brightness(120%);
    transform: scale(0.95);
  }

  $sizes: 'normal' 2px 1, 'medium' 3.5px 1.25, 'large' 5px 1.5;

  @each $name, $size, $brScale in $sizes {
    &[size='#{$name}'] {
      margin: $size;
      padding: #{3 * $size} #{4 * $size};
      border-radius: #{$brScale * $border-radius};
      .vm-button__icon ~ .vm-button__title,
      .vm-button__title ~ .vm-button__icon {
        margin-left: #{2.5 * $size};
      }
    }
  }

  &[variant='border'] {
    box-shadow: inset 0 0 0 1px rgba(var(--vm-primary), 1);
    color: rgba(var(--vm-primary), 1);

    &:not([disabled]):hover {
      @include button-gradient();
      box-shadow: none;
      color: rgba(var(--vm-color), 1);
    }
  }

  &[variant='filled'] {
    color: rgba(var(--vm-color), 1);
    @include button-gradient();

    &:not([disabled]):hover {
      filter: brightness(110%);
    }
  }

  &[variant='opaque'] {
    color: rgba(var(--vm-primary), 1);
    @include button-gradient(0.25, 0.05);

    &:not([disabled]):hover {
      @include button-gradient();
      color: rgba(var(--vm-color), 1);
    }
  }
}
</style>
