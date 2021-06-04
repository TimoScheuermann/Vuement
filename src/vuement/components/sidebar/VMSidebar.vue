<template>
  <div
    class="vm-sidebar"
    :frosted="frosted"
    :style="{
      width,
      '--vm-color:': vmColor,
      '--vm-background': vmBackground,
    }"
  >
    <div class="vm-sidebar__backgroundImage" v-if="backgroundImage">
      <img :src="backgroundImage" alt="" />
    </div>
    <div class="vm-sidebar__background" :style="{ background }" />
    <div class="vm-sidebar--content">
      <div class="vm-sidebar--content__header">
        <slot name="header" />
      </div>
      <div class="vm-sidebar--content__body">
        <slot />
      </div>
      <div class="vm-sidebar--content__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component
export default class VMSidebar extends Mixins(VMCProp, VMBgProp) {
  @Prop() backgroundImage!: string;
  @Prop({ default: false }) frosted!: boolean;
  @Prop() width!: string;
}
</script>

<style lang="scss" scoped>
.vm-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1600;
  box-shadow: 4px 8px 20px rgba(#111, 0.18);
  color: rgba(var(--vm-color), 1);

  &[frosted] {
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      .vm-sidebar__background {
        opacity: 0.5;
      }
      backdrop-filter: saturate(180%) blur(20px);
    }
  }

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
    background: rgba(var(--vm-background), 1);
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
      @include vm-scrollbar();
    }
  }
}
</style>
