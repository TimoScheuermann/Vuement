<template>
  <button
    class="tc-button"
    @click="clicked"
    :disabled="disabled"
    :size="size"
    :variant="buttonVariant"
    :style="tcColor + tcBackground + tcGradient"
  >
    <div class="tc-button__background" />
    <div class="tc-button__border" />
    <div class="tc-button__container">
      <div class="tc-button__icon" v-if="icon && !iconTrailing">
        <i :class="icon" />
      </div>
      <div class="tc-button__title" v-if="title">{{ title }}</div>
      <div class="tc-button__icon" v-if="icon && iconTrailing">
        <i :class="icon" />
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { colorLuminance, getColor } from '@/tcComponents/util';
import { Component, Prop } from 'vue-property-decorator';
import TCLinkMixin from '@/tcComponents/mixins/TCLink.mixin';
import { mixins } from 'vue-class-component';

@Component
export default class TCButton extends mixins(TCLinkMixin) {
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

  get tcColor(): string {
    return `--tc-color:${getColor(this, this.color)};`;
  }

  get tcBackground(): string {
    return `--tc-background:${getColor(this, this.background)};`;
  }

  get tcGradient(): string {
    const color = getColor(this, this.background);
    const light = colorLuminance(color, 7.5);
    const dark = colorLuminance(color, -7.5);
    return `--tc-gradient:linear-gradient(to bottom right, ${light}, ${dark});`;
  }
}
</script>

<style lang="scss" scoped>
.tc-button {
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
    border: 1px solid var(--tc-background);
  }

  &__container {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
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
      .tc-button__icon ~ .tc-button__title,
      .tc-button__title ~ .tc-button__icon {
        margin-left: #{2 * $size};
      }
    }
  }

  &[variant='border'] {
    color: var(--tc-background);
    border-color: var(--tc-background);

    .tc-button__background {
      background: var(--tc-gradient);
      transform: scale(0);
      border-radius: 100px;
    }
    &:not([disabled]):hover {
      .tc-button__background {
        transform: scale(1);
        border-radius: inherit;
      }
      color: var(--tc-color);
    }
  }

  &[variant='filled'] {
    color: var(--tc-color);
    .tc-button__background {
      background: var(--tc-gradient);
    }
    &:not([disabled]):hover {
      filter: brightness(110%);
    }
  }

  &[variant='opaque'] {
    color: var(--tc-background);
    .tc-button__background {
      background: var(--tc-gradient);
      opacity: 0.2;
    }
    &:not([disabled]):hover {
      .tc-button__background {
        opacity: 1;
      }
      color: var(--tc-color);
    }
  }

  &:not([disabled]):active {
    filter: brightness(120%);
    transform: scale(0.95);
  }
}
</style>
