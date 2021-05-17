<template>
  <div class="tc-list">
    <div class="tc-list__background" />
    <div class="tc-list__content"><slot /></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TCList extends Vue {}
</script>

<style lang="scss" scoped>
.tc-list {
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
    background: var(--tc-paragraph);
  }

  &__content {
    position: relative;
  }
}
</style>
