<template>
  <div class="vm-square-spinner"></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component<VMSquareSpinner>({
  name: 'vmSquareSpinner',
})
export default class VMSquareSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.vm-square-spinner {
  height: var(--vm-spinner-s);
  width: var(--vm-spinner-s);
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
