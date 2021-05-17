<template>
  <div class="tc-sidebar">
    <div class="tc-sidebar__backgroundImage" v-if="backgroundImage">
      <img :src="backgroundImage" alt="" />
    </div>
    <div class="tc-sidebar__background" />
    <div class="tc-sidebar--content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCSidebar extends Vue {
  @Prop() backgroundImage!: string;
}
</script>

<style lang="scss" scoped>
.tc-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 220px;
  @include backdrop-blur();

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
    padding: 20px;
    position: relative;
  }

  //
}
</style>
