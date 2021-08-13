<template>
  <div
    class="vm-avatar"
    :style="{ '--vm-outline': vmOutline }"
    :size="avatarSize"
    :outline="!!outline ? true : null"
    :variant="avatarVariant"
  >
    <img v-if="src" :src="src" alt="" />
  </div>
</template>

<script lang="ts">
import VMColorMixin from '@/vuement/mixins/VMColor.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component<VMAvatar>({
  name: 'vmAvatar',
})
export default class VMAvatar extends Mixins(VMColorMixin) {
  @Prop() src!: string;
  @Prop({ default: 'small' }) size!: string;
  @Prop({ default: 'rounded' }) variant!: string;
  @Prop() outline!: string;

  get vmOutline(): string | null {
    return this.outline ? this.getColor(this.outline) : null;
  }

  get avatarSize(): string {
    const sizes = ['small', 'normal', 'medium', 'large'];
    const size = (this.size || '').toLowerCase();
    return sizes.includes(size) ? size : sizes[0];
  }

  get avatarVariant(): string {
    const variants = ['circle', 'rounded', 'square'];
    const variant = (this.variant || '').toLowerCase();
    return variants.includes(variant) ? variant : variants[0];
  }
}
</script>

<style lang="scss" scoped>
.vm-avatar {
  overflow: hidden;
  background: rgba(var(--vm-container), 1);

  &[outline] {
    border: 2px solid rgba(var(--vm-background), 1);
    box-shadow: 0px 0px 0px 2px rgba(var(--vm-outline), 1);
  }

  $sizes: 'small' 40px, 'normal' 80px, 'medium' 120px, 'large' 160px;

  @each $name, $size in $sizes {
    &[size='#{$name}'] {
      width: $size;
      height: $size;

      &[outline] {
        box-shadow: 0px 0px 0px #{$size / 30} rgba(var(--vm-outline), 1);
      }

      &[variant='circle'] {
        border-radius: $size;
      }
      &[variant='rounded'] {
        border-radius: #{$size / 3};
      }
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
