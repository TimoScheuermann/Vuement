<template>
  <tr class="vm-tr">
    <slot />
  </tr>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VMTr extends Vue {}
</script>

<style lang="scss" scoped>
.vm-tr {
  text-align: inherit;
  padding: 5px;

  transition: 0.1s ease-in-out;
  &:hover {
    background: var(--vm-container);
  }
}
</style>
