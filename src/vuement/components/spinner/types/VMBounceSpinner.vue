<template>
  <div class="vm-bounce-spinner">
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VMBounceSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.vm-bounce-spinner {
  position: relative;
  width: var(--vm-spinner-s);
  height: var(--vm-spinner-s);

  div {
    position: absolute;
    width: var(--vm-spinner-s);
    height: var(--vm-spinner-s);
    background: currentColor;
    border-radius: 50%;

    animation: anim 2s ease 0s infinite both;
    &:nth-child(2) {
      animation-delay: 1s;
    }
  }

  @keyframes anim {
    0%,
    100% {
      opacity: 0.5;
      transform: scale(1);
    }
    50% {
      opacity: 0;
      transform: scale(0.25);
    }
  }
}
</style>
