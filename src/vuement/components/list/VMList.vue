<template>
  <ul class="vm-list" :style="{ '--vm-color': vmColor }">
    <slot />
  </ul>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component
export default class VMList extends Mixins(VMCProp) {}
</script>

<style lang="scss" scoped>
.vm-list {
  margin: 0;
  padding: 0;
  color: rgba(var(--vm-color), 1);
  width: 100%;
}
</style>
