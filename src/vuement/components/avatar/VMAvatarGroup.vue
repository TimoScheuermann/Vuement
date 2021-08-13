<template>
  <div class="vm-avatar-group">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component<VMAvatarGroup>({
  name: 'vmAvatarGroup',
})
export default class VMAvatarGroup extends Vue {}
</script>

<style lang="scss" scoped>
.vm-avatar-group {
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;

  .vm-avatar:not(:last-child) {
    $sizes: 'small' 40px, 'normal' 80px, 'medium' 120px, 'large' 160px;

    @each $name, $size in $sizes {
      &[size='#{$name}'] {
        margin-right: #{-$size/2.5};
      }
    }
  }
}
</style>
