<template>
  <div class="tc-chip-wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TCChipWrapper extends Vue {}
</script>

<style lang="scss" scoped>
.tc-chip-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
