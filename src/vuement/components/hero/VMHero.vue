<template>
  <div
    class="vm-hero"
    :style="{ '--vm-color': vmColor, '--vm-container': vmBackground, height }"
  >
    <video v-if="video" ref="video" playsinline autoplay="autoplay" loop muted>
      <source :src="video" />
    </video>
    <img v-else-if="image" :src="image" alt="" />
    <div class="vm-hero__content"><slot /></div>
  </div>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';

@Component
export default class VMHero extends Mixins(VMCProp, VMBgProp) {
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
}
</script>

<style lang="scss" scoped>
.vm-hero {
  background: rgba(var(--vm-container), 1);
  color: rgba(var(--vm-color), 1);
  position: relative;
  overflow: hidden;

  & > img,
  & > video {
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
