<template>
  <div class="tc-square-spinner"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TCSquareSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.tc-square-spinner {
  height: var(--tc-spinner-s);
  width: var(--tc-spinner-s);
  background: currentColor;
  animation: anim 2s ease-in-out 0s infinite both;
}

@keyframes anim {
  25%,
  50% {
    transform: rotateX(180deg) rotateY(0);
  }
  75%,
  100% {
    transform: rotateX(180deg) rotateY(180deg);
  }
}
</style>
