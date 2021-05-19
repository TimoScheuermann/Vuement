<template>
  <div class="view-hero">
    <tc-divider position="leading">
      <h3>Example</h3>
    </tc-divider>
    <br />
    <tc-hero>
      <h1>Example Hero</h1>
    </tc-hero>

    <br /><br />
    <tc-divider position="leading">
      <h3>Custom Backgrounds</h3>
    </tc-divider>
    <p>
      You can define different backgrounds depending on your use-case. Choose
      between colors, gradients, images or videos.
    </p>

    <tc-grid>
      <tc-hero background="#ff4757" style="color: #fff">
        <h3>Colored Background</h3>
      </tc-hero>
      <tc-hero background="linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)">
        <h3>Gradient Background</h3>
      </tc-hero>
      <tc-hero
        style="color: #fff"
        image="https://images.unsplash.com/photo-1470130623320-9583a8d06241?h=400"
      >
        <h3>Image Background</h3>
      </tc-hero>
      <tc-hero
        style="color: #fff"
        video="https://assets.mixkit.co/videos/preview/mixkit-squirrel-eating-on-a-hand-with-a-pink-glove-7291-small.mp4"
      >
        <h3>Video Background</h3>
      </tc-hero>
    </tc-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Hero extends Vue {}
</script>

<style lang="scss" scoped>
.view-hero {
  //
}
</style>
