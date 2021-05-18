<template>
  <div class="tc-card" :direction="direction === 'column' ? direction : 'row'">
    <div class="tc-card--media" v-if="video || image">
      <img v-if="image" :src="image" alt="" />
      <video
        v-if="video"
        ref="video"
        playsinline
        autoplay="autoplay"
        loop
        muted
      >
        <source :src="video" />
      </video>
      <div class="tc-card--media__overlay">
        <slot name="overlay" />
      </div>
    </div>
    <div class="tc-card--content">
      <div class="tc-card--content__title" v-if="title">{{ title }}</div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class TCCard extends Vue {
  @Prop() image!: string;
  @Prop() video!: string;
  @Prop() title!: string;
  @Prop({ default: 'column' }) direction!: string;

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
}
</script>

<style lang="scss" scoped>
.tc-card {
  display: grid;

  &[direction='column'] {
    grid-template-rows: minmax(0px, 200px) 1fr;
    .tc-card--media {
      border-top-right-radius: $border-radius;
      border-top-left-radius: $border-radius;
    }
  }

  &[direction='row'] {
    grid-template-columns: minmax(0px, 1fr) 2fr;
    .tc-card--media {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
  }

  width: fit-content;

  border-radius: $border-radius;
  background: var(--tc-paragraph);

  box-shadow: 2px 4px 10px rgba(#111, 0.09);
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 4px 8px 20px rgba(#111, 0.18);
    transform: scale(1.0174);
  }

  &--media {
    position: relative;

    img,
    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
    &__overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    }
  }
  &--content {
    padding: 15px;

    &__title {
      font-weight: 550;
      font-size: 20px;
      margin-bottom: 5px;
    }
  }
}
</style>
