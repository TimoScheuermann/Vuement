<template>
  <div class="tc-sidebar" :frosted="frosted" :style="{ width, color }">
    <div class="tc-sidebar__backgroundImage" v-if="backgroundImage">
      <img :src="backgroundImage" alt="" />
    </div>
    <div class="tc-sidebar__background" :style="{ background }" />
    <div class="tc-sidebar--content">
      <div class="tc-sidebar--content__header">
        <slot name="header" />
      </div>
      <div class="tc-sidebar--content__body">
        <slot />
      </div>
      <div class="tc-sidebar--content__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCSidebar extends Vue {
  @Prop() backgroundImage!: string;
  @Prop({ default: false }) frosted!: boolean;
  @Prop() width!: string;
  @Prop() color!: string;
  @Prop() background!: string;
}
</script>

<style lang="scss" scoped>
.tc-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 101;

  &[frosted] {
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      .tc-sidebar__background {
        opacity: 0.5;
      }
      backdrop-filter: saturate(180%) blur(20px);
    }
  }

  box-shadow: 4px 8px 20px rgba(#111, 0.18);

  &__backgroundImage {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.2);
      filter: saturate(180%) blur(20px);
    }
  }

  &__background {
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100%;
    background: var(--tc-paragraph);
  }

  &--content {
    z-index: inherit;
    position: relative;

    display: grid;
    grid-gap: 0;
    grid-template-rows: auto 1fr auto;
    max-height: calc(
      100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom)
    );

    padding-top: env(safe-area-inset-top);
    padding-left: env(safe-area-inset-left);
    padding-bottom: env(safe-area-inset-bottom);

    &__body {
      padding: 10px;
      overflow: auto;
      @include scrollbar();
    }
  }
}
</style>
