<template>
  <th class="vm-th">
    <slot />
  </th>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VMTh extends Vue {}
</script>

<style lang="scss" scoped>
.vm-th {
  text-align: inherit;
  padding: 7.5px;
  font-weight: bold;
  vertical-align: middle;
}
</style>
