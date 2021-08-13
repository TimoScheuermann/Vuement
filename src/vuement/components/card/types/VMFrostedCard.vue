<template>
  <div class="vm-frosted-card">
    <div class="vm-frosted-card--header" v-if="$slots.header">
      <slot name="header" />
    </div>
    <div class="vm-frosted-card--media" v-if="hasMedia">
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
    <div class="vm-frosted-card--content">
      <slot name="title">
        <div class="vm-frosted-card--content__title" v-if="title">
          {{ title }}
        </div>
      </slot>
      <slot name="subtitle">
        <div class="vm-frosted-card--content__subtitle" v-if="subtitle">
          {{ subtitle }}
        </div>
      </slot>
      <div class="vm-frosted-card--content__spacer" v-if="$slots.default" />
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import VMCardMixin from '@/vuement/mixins/VMCard.mixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component<VMFrostedCard>({
  name: 'vmFrostedCard',
})
export default class VMFrostedCard extends Mixins(VMCardMixin) {}
</script>

<style lang="scss" scoped>
.vm-frosted-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  &--media {
    user-select: none;
    min-height: 200px;
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
    margin-top: -40px;
    border-radius: 0 0 $border-radius $border-radius;
    background: rgba(var(--vm-paragraph), 0.75);
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      backdrop-filter: saturate(180%) blur(20px);
      background: rgba(var(--vm-paragraph), 0.5);
    }

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
