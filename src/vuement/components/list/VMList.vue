<template>
  <div
    class="vm-list"
    :style="{ '--vm-color': vmColor, '--vm-paragraph': vmBackground }"
  >
    <div class="vm-list__background" />
    <div class="vm-list__content"><slot /></div>
  </div>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component
export default class VMList extends Mixins(VMCProp, VMBgProp) {}
</script>

<style lang="scss" scoped>
.vm-list {
  position: relative;
  padding: 5px;
  margin: 2.5px;
  border-radius: $border-radius;

  color: rgba(var(--vm-color), 1);

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: rgba(var(--vm-paragraph), 1);
  }

  &__content {
    position: relative;
  }
}
</style>
