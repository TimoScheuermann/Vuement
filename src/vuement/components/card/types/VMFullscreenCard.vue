<template>
  <div class="vm-fullscreen-card">
    <div class="vm-fullscreen-card--media" v-if="hasMedia">
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

    <div class="vm-fullscreen-card--content">
      <slot name="header" />
      <div
        class="vm-fullscreen-card--content__spacer"
        :hasHeader="$slots.header"
      />
      <slot name="title">
        <div class="vm-fullscreen-card--content__title" v-if="title">
          {{ title }}
        </div>
      </slot>
      <slot name="subtitle">
        <div class="vm-fullscreen-card--content__subtitle" v-if="subtitle">
          {{ subtitle }}
        </div>
      </slot>
      <div
        class="vm-fullscreen-card--content__text"
        :hasTitle="hasTitle"
        v-if="$slots.default"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VMCardMixin from '@/vuement/mixins/VMCard.mixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component<VMFullscreenCard>({
  name: 'vmFullscreenCard',
})
export default class VMFullscreenCard extends Mixins(VMCardMixin) {}
</script>

<style lang="scss" scoped>
.vm-fullscreen-card {
  position: relative;
  height: 100%;
  &--media {
    user-select: none;
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    img,
    video {
      border-radius: $border-radius;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &--content {
    position: relative;
    padding: 20px;
    height: calc(100% - 40px);
    display: flex;
    flex-direction: column;

    &__spacer {
      flex-grow: 1;
      &[hasHeader] {
        min-height: 40px;
      }
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

    &__text[hasTitle] {
      margin-top: 10px;
    }
  }
}
</style>
