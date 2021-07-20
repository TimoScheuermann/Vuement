<template>
  <VMClickable
    class="vm-button"
    fallback="button"
    @click.stop="clicked"
    :disabled="disabled"
    :href="href"
    :to="to"
    :routeName="routeName"
    :size="size"
    :variant="buttonVariant"
    :gradient="gradient"
    :block="block"
    :round="round"
    :style="{
      '--vm-button-color': vmColor,
      '--vm-button-background': vmBackground,
    }"
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
  </VMClickable>
</template>

<script lang="ts">
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import VMColorMixin from '@/vuement/mixins/VMColor.mixin';
import VMClickable from '@/vuement/mixins/VMClickable.vue';

@Component({
  components: {
    VMClickable,
  },
})
export default class VMButton extends mixins(VMLinkMixin, VMColorMixin) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop({ default: false }) iconTrailing!: boolean;
  @Prop({ default: 'normal' }) size!: string;
  @Prop({ default: 'filled' }) variant!: string;
  @Prop() color!: string;
  @Prop() background!: string;
  @Prop({ default: false }) gradient!: boolean;
  @Prop({ default: false }) block!: boolean;
  @Prop({ default: false }) round!: boolean;

  get buttonSize(): string {
    const sizes = ['normal', 'medium', 'large'];
    const size = (this.size || '').toLowerCase();
    return sizes.includes(size) ? size : sizes[0];
  }

  get vmColor(): string | null {
    if (!this.color) {
      if (this.buttonVariant === 'transparent') return this.getColor('color');
      return this.getColor('white');
    }
    return this.color ? this.getColor(this.color) : null;
  }

  get vmBackground(): string | null {
    if (!this.background) {
      if (this.buttonVariant === 'transparent') return this.getColor('color');
      return this.getColor('primary');
    }
    return this.background ? this.getColor(this.background) : null;
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
  background: rgba(var(--vm-button-background), $opacity);

  &[gradient] {
    background: linear-gradient(
        135deg,
        rgba(#fff, $gradient),
        rgba(#000, $gradient)
      ),
      rgba(var(--vm-button-background), $opacity);
  }
}

.vm-button {
  @include vm-clickable();

  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  flex: 1 1 0px;

  font-weight: 500;

  &[block] {
    display: flex;
    width: 100%;
    margin: 0 auto;
    max-width: 250px;
  }

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
    box-shadow: inset 0 0 0 1px rgba(var(--vm-button-background), 1);
    color: rgba(var(--vm-button-background), 1);

    &:not([disabled]) {
      &:hover,
      &:focus {
        @include button-gradient();
        box-shadow: none;
        color: rgba(var(--vm-button-color), 1);
      }
    }
  }

  &[variant='filled'] {
    color: rgba(var(--vm-button-color), 1);
    @include button-gradient();

    &:not([disabled]) {
      &:hover,
      &:focus {
        filter: brightness(107.5%);
      }
    }
  }

  &[variant='opaque'] {
    color: rgba(var(--vm-button-background), 1);
    @include button-gradient(0.25, 0.05);

    &:not([disabled]) {
      &:hover,
      &:focus {
        @include button-gradient();
        color: rgba(var(--vm-button-color), 1);
      }
    }
  }

  &[variant='transparent'] {
    color: rgba(var(--vm-button-color), 1);
    &:not([disabled]) {
      &:hover,
      &:focus {
        @include button-gradient(0.1, 0.05);
      }
    }
  }

  &[round] {
    border-radius: 10em;
  }
}
</style>
