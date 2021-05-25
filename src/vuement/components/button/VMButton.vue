<template>
  <button
    class="vm-button"
    @click.stop="clicked"
    :disabled="disabled"
    :size="size"
    :variant="buttonVariant"
    :style="vmColor + vmBackground + vmGradient"
  >
    <div class="vm-button__background" />
    <div class="vm-button__border" />
    <div class="vm-button__container">
      <div class="vm-button__icon" v-if="icon && !iconTrailing">
        <i :class="icon" />
      </div>
      <div class="vm-button__title" v-if="title">{{ title }}</div>
      <div class="vm-button__icon" v-if="icon && iconTrailing">
        <i :class="icon" />
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { colorLuminance, getColor } from '@/vuement/util';
import { Component, Prop } from 'vue-property-decorator';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { mixins } from 'vue-class-component';

@Component({
  name: 'vmButton',
})
export default class VMButton extends mixins(VMLinkMixin) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop({ default: false }) iconTrailing!: boolean;
  @Prop({ default: 'normal' }) size!: string;
  @Prop({ default: 'filled' }) variant!: string;
  @Prop({ default: 'white' }) color!: string;
  @Prop({ default: 'primary' }) background!: string;

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

  get vmColor(): string {
    return `--vm-color:${getColor(this.color)};`;
  }

  get vmBackground(): string {
    return `--vm-background:${getColor(this.background)};`;
  }

  get vmGradient(): string {
    const color = getColor(this.background);
    const light = colorLuminance(color, 7.5);
    const dark = colorLuminance(color, -7.5);
    return `--vm-gradient:linear-gradient(to bottom right, ${light}, ${dark});`;
  }
}
</script>

<style lang="scss" scoped>
.vm-button {
  position: relative;
  transition: 0.1s ease-in-out;

  border: none;
  outline: none;
  background: none;
  font: inherit;

  cursor: pointer;

  &__background,
  &__border {
    transition: inherit;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    z-index: 0;
  }

  &__border {
    border: 1px solid var(--vm-background);
  }

  &__container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  &__icon,
  &__title {
    display: grid;
    place-content: center;
    min-height: 19.33px;
    min-width: 19.33px;
  }

  &[disabled] {
    cursor: not-allowed;
    filter: saturate(25%);
  }

  $sizes: 'normal' 2px 1, 'medium' 3.5px 1.25, 'large' 5px 1.5;

  @each $name, $size, $brScale in $sizes {
    &[size='#{$name}'] {
      margin: $size;
      padding: #{3 * $size} #{4 * $size};
      border-radius: #{$brScale * $border-radius};
      .vm-button__icon ~ .vm-button__title,
      .vm-button__title ~ .vm-button__icon {
        margin-left: #{2 * $size};
      }
    }
  }

  &[variant='border'] {
    color: var(--vm-background);
    border-color: var(--vm-background);

    .vm-button__background {
      background: var(--vm-gradient);
      transform: scale(0);
      border-radius: 100px;
    }
    &:not([disabled]):hover {
      .vm-button__background {
        transform: scale(1);
        border-radius: inherit;
      }
      color: var(--vm-color);
    }
  }

  &[variant='filled'] {
    color: var(--vm-color);
    .vm-button__background {
      background: var(--vm-gradient);
    }
    &:not([disabled]):hover {
      filter: brightness(110%);
    }
  }

  &[variant='opaque'] {
    color: var(--vm-background);
    .vm-button__background {
      background: var(--vm-gradient);
      opacity: 0.2;
    }
    &:not([disabled]):hover {
      .vm-button__background {
        opacity: 1;
      }
      color: var(--vm-color);
    }
  }

  &:not([disabled]):active {
    filter: brightness(120%);
    transform: scale(0.95);
  }
}
</style>
