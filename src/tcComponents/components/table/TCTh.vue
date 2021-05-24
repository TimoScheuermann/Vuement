<template>
  <th class="tc-th">
    <slot />
  </th>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TCTh extends Vue {}
</script>

<style lang="scss" scoped>
.tc-th {
  text-align: inherit;
  padding: 10px;
  font-weight: bold;
  vertical-align: middle;
  background: var(--tc-container);
}
</style>
