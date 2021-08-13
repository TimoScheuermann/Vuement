<template>
  <div class="vm-plain-card">
    <div class="vm-plain-card--header" v-if="$slots.header">
      <slot name="header" />
    </div>
    <div class="vm-plain-card--media" v-if="hasMedia">
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

    <div class="vm-plain-card--content">
      <slot name="title">
        <div class="vm-plain-card--content__title" v-if="title">
          {{ title }}
        </div>
      </slot>
      <slot name="subtitle">
        <div class="vm-plain-card--content__subtitle" v-if="subtitle">
          {{ subtitle }}
        </div>
      </slot>
      <div
        class="vm-plain-card--content__text"
        v-if="$slots.default"
        :hasTitle="hasTitle"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VMCardMixin from '@/vuement/mixins/VMCard.mixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component<VMPlainCard>({
  name: 'vmPlainCard',
})
export default class VMPlainCard extends Mixins(VMCardMixin) {}
</script>

<style lang="scss" scoped>
.vm-plain-card {
  display: flex;
  flex-direction: column;
  height: 100%;

  &--header {
    margin: 10px 20px;
  }

  &--media {
    flex: 1 1 0px;
    user-select: none;
    img,
    video {
      border-radius: $border-radius;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  &--content {
    margin: 20px;

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

  &--header ~ &--content {
    margin-top: 0px;
  }
}
</style>
