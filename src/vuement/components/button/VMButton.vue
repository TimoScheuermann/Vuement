<template>
  <button
    class="vm-button"
    @click.stop="clicked"
    :disabled="disabled"
    :size="size"
    :variant="buttonVariant"
    :gradient="gradient"
    :block="block"
    :round="round"
    :style="{ '--vm-color': vmColor, '--vm-primary': vmBackground }"
  >
    <div class="vm-button__icon" v-if="icon && !iconTrailing">
      <i :class="icon" />
    </div>
    <slot>
      <div class="vm-button__title" v-if="title">{{ title }}</div>
    </slot>
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
  @Prop({ default: false }) gradient!: boolean;
  @Prop({ default: false }) block!: boolean;
  @Prop({ default: false }) round!: boolean;

  get buttonSize(): string {
    const sizes = ['normal', 'medium', 'large'];
    const size = (this.size || '').toLowerCase();
    return sizes.includes(size) ? size : sizes[0];
  }

  get buttonVariant(): string {
    const variants = ['filled', 'border', 'opaque', 'transparent'];
    const variant = (this.variant || '').toLowerCase();
    return variants.includes(variant) ? variant : variants[0];
  }
}
</script>

<style lang="scss" scoped>
@mixin button-gradient($opacity: 1, $gradient: 0.2) {
  background: rgba(var(--vm-primary), $opacity);

  &[gradient] {
    background: linear-gradient(
        135deg,
        rgba(#fff, $gradient),
        rgba(#000, $gradient)
      ),
      rgba(var(--vm-primary), $opacity);
  }
}

.vm-button {
  @include vm-button();

  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;

  &[block] {
    display: flex;
    width: 100%;
    margin: 0 auto;
    max-width: 250px;
  }

  flex: 1 1 0px;

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

  &__icon,
  &__title {
    user-select: none;
  }

  &__icon {
    display: grid;
    height: 1.2085em;
    width: 1.2085em;
    place-content: center;
    i {
      font-size: 0.85em;
    }
  }

  $sizes: 'normal' 0.125em 3, 'medium' 0.25em 2.5, 'large' 0.375em 2;

  @each $name, $size, $brScale in $sizes {
    &[size='#{$name}'] {
      margin: $size;
      padding: #{3 * $size};
      border-radius: #{$brScale * $size};

      .vm-button__title {
        padding: 0 #{3 * $size};
      }

      &[block] {
        width: calc(100% - #{2 * $size});
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
      filter: brightness(107.5%);
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

  &[variant='transparent'] {
    color: rgba(var(--vm-primary), 1);

    &:not([disabled]):hover {
      @include button-gradient(0.1, 0.05);
    }
  }

  &[round] {
    border-radius: 10em;
  }
}
</style>
