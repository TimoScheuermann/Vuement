<template>
  <div
    class="vm-card"
    :direction="direction === 'column' ? direction : 'row'"
    :style="{
      '--vm-color': vmColor,
      '--vm-paragraph': vmBackground,
    }"
  >
    <div class="vm-card--media" v-if="video || image">
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
      <div class="vm-card--media__overlay">
        <slot name="overlay" />
      </div>
    </div>
    <div class="vm-card--content">
      <div class="vm-card--content__title" v-if="title">{{ title }}</div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';

@Component
export default class VMCard extends Mixins(VMCProp, VMBgProp) {
  @Prop() image!: string;
  @Prop() video!: string;
  @Prop() title!: string;
  @Prop({ default: 'column' }) direction!: string;

  get videoElem(): HTMLVideoElement | null {
    if (!this.video) return null;
    const elem = this.$refs.video;
    return elem ? (elem as HTMLVideoElement) : null;
  }

  @Watch('video')
  public videoChanged(): void {
    if (this.video) {
      setTimeout(() => {
        if (this.videoElem) this.videoElem.play();
      }, 100);
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-card {
  display: grid;

  &[direction='column'] {
    grid-template-rows: auto auto;
    .vm-card--media {
      height: 200px;
      border-top-right-radius: $border-radius;
      border-top-left-radius: $border-radius;
    }
  }

  &[direction='row'] {
    grid-template-columns: auto auto;
    .vm-card--media {
      width: 200px;
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
  }

  border-radius: $border-radius;
  background: rgba(var(--vm-paragraph), 1);
  color: rgba(var(--vm-color), 1);

  transition: 0.2s ease-in-out;
  &:hover {
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
