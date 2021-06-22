<template>
  <ul
    class="vm-list"
    :style="{ '--vm-color': vmColor, '--vm-backgorund': vmBackground }"
  >
    <slot />
  </ul>
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
  margin: 0;
  padding: 0px;
  color: rgba(var(--vm-color), 1);
  width: 100%;
  background: rgba(var(--vm-background), 1);
  border-radius: $border-radius;
}
</style>
