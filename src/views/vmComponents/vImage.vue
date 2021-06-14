<template>
  <div class="view-details-image">
    <vm-flow>
      <div class="image-wrapper">
        <vm-image
          src="https://images.unsplash.com/photo-1552049879-1af647388e2e?h=200"
        />
      </div>
      <div class="image-wrapper">
        <vm-image
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=200"
        />
      </div>
      <div class="image-wrapper">
        <vm-image
          src="https://images.unsplash.com/photo-1509987300714-11c90a6d40e7?h=200"
        />
      </div>
    </vm-flow>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DetailsVImage extends Vue {}
</script>

<style lang="scss" scoped>
.view-details-image {
  .image-wrapper {
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
