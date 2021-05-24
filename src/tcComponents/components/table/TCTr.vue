<template>
  <tr class="tc-tr">
    <slot />
  </tr>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TCTr extends Vue {}
</script>

<style lang="scss" scoped>
.tc-tr {
  text-align: inherit;
  padding: 5px;

  transition: 0.1s ease-in-out;
  &:hover {
    background: var(--tc-container);
  }
}
</style>
