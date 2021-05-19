<template>
  <div class="view-image">
    <tc-divider position="leading">
      <h3>Examples</h3>
    </tc-divider>
    <br />

    <tc-flow>
      <div class="image-wrapper">
        <tc-image
          src="https://images.unsplash.com/photo-1552049879-1af647388e2e?h=200"
        />
      </div>
      <div class="image-wrapper">
        <tc-image
          src="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=200"
        />
      </div>
      <div class="image-wrapper">
        <tc-image
          src="https://images.unsplash.com/photo-1509987300714-11c90a6d40e7?h=200"
        />
      </div>
    </tc-flow>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Image extends Vue {}
</script>

<style lang="scss" scoped>
.view-image {
  .image-wrapper {
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
