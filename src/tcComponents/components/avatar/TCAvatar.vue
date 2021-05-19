<template>
  <div class="tc-avatar" :size="avatarSize" :variant="avatarVariant">
    <img v-if="src" :src="src" alt="" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCAvatar extends Vue {
  @Prop() src!: string;
  @Prop({ default: 'small' }) size!: string;
  @Prop({ default: 'rounded' }) variant!: string;

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
.tc-avatar {
  overflow: hidden;
  background: var(--tc-container);

  $sizes: 'small' 40px, 'normal' 80px, 'medium' 120px, 'large' 160px;

  @each $name, $size in $sizes {
    &[size='#{$name}'] {
      width: $size;
      height: $size;

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
