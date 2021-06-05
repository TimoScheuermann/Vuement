<template>
  <div
    class="vm-tabbar"
    :style="{ '--vm-color': vmColor, '--vm-background': vmBackground }"
  >
    <div class="vm-tabbar__background" />
    <div class="vm-tabbar__items"><slot /></div>
  </div>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component
export default class VMTabbar extends Mixins(VMCProp, VMBgProp) {}
</script>

<style lang="scss" scoped>
.vm-tabbar {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;

  color: rgba(var(--vm-color), 1);
  padding: 0 5vw;
  padding-bottom: env(safe-area-inset-bottom);
  box-shadow: -2px -4px 8px rgba(#111, 0.05);

  &__items {
    position: relative;
    display: flex;
    height: 50px;
    justify-content: space-around;
    flex-wrap: nowrap;
    align-items: center;
  }

  @include backdrop-blur();
  &__background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(var(--vm-background), 1);
  }
}
</style>
