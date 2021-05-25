<template>
  <div class="vm-list">
    <div class="vm-list__background" />
    <div class="vm-list__content"><slot /></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VMList extends Vue {}
</script>

<style lang="scss" scoped>
.vm-list {
  position: relative;
  padding: 5px;
  margin: 2.5px;
  border-radius: $border-radius;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: var(--vm-paragraph);
  }

  &__content {
    position: relative;
  }
}
</style>
