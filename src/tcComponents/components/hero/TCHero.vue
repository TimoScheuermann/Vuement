<template>
  <div class="tc-hero" :style="heroHeight + heroBackground">
    <video v-if="video" ref="video" playsinline autoplay="autoplay" loop muted>
      <source :src="video" />
    </video>
    <img v-else-if="image" :src="image" alt="" />
    <div class="tc-hero__content"><slot /></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class TCHero extends Vue {
  @Prop() background!: string;
  @Prop({ default: '200px' }) height!: string;
  @Prop() image!: string;
  @Prop() video!: string;

  @Watch('video')
  public videoChanged(): void {
    if (this.video) {
      setTimeout(() => {
        const elem = this.$refs.video;
        if (elem) {
          (elem as HTMLVideoElement).play();
        }
      }, 100);
    }
  }

  get heroBackground(): string | null {
    if (!this.background) return null;
    return `--tc-container:${this.background};`;
  }

  get heroHeight(): string {
    return `height:${this.height};`;
  }
}
</script>

<style lang="scss" scoped>
.tc-hero {
  background: var(--tc-container);
  position: relative;
  overflow: hidden;

  img,
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    position: absolute;
    z-index: 11;
    height: 100%;
    width: 100%;
    display: grid;
    place-content: center;
    max-height: 100%;
    max-width: 100%;
    overflow: auto;
  }
}
</style>
