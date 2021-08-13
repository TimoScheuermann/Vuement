<template>
  <div class="vm-preview-card">
    <div class="vm-preview-card--header" v-if="$slots.header">
      <slot name="header" />
    </div>
    <div class="vm-preview-card--media" v-if="hasMedia">
      <slot name="media">
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
        <img v-else-if="image" :src="image" :alt="title || image" />
      </slot>
    </div>
    <div class="vm-preview-card--content">
      <slot name="title">
        <div class="vm-preview-card--content__title" v-if="title">
          {{ title }}
        </div>
      </slot>
      <slot name="subtitle">
        <div class="vm-preview-card--content__subtitle" v-if="subtitle">
          {{ subtitle }}
        </div>
      </slot>
      <div class="vm-preview-card--content__spacer" v-if="$slots.default" />
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import VMCardMixin from '@/vuement/mixins/VMCard.mixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component<VMPreviewCard>({
  name: 'vmPreviewCard',
})
export default class VMPreviewCard extends Mixins(VMCardMixin) {}
</script>

<style lang="scss" scoped>
.vm-preview-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  &--media {
    user-select: none;
    min-height: 180px;
    img,
    video {
      border-radius: $border-radius $border-radius 0 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &--header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 20px;
  }

  &--content {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1 1 0px;
    padding: 20px {
      top: 10px;
    }
    margin-top: -25px;
    border-radius: 0 0 $border-radius $border-radius;
    background: linear-gradient(
      to bottom,
      rgba(var(--vm-paragraph), 0.1) 0em,
      rgba(var(--vm-paragraph), 1) 25px
    );

    &__spacer {
      flex: 1 1 0px;
      min-height: 10px;
    }

    &__title {
      font-size: 1.3em;
      font-weight: bold;
      overflow-wrap: break-word;
    }

    &__subtitle {
      font-size: 0.75em;
      font-weight: bold;
      text-transform: uppercase;
      opacity: 0.65;
    }
  }
}
</style>
