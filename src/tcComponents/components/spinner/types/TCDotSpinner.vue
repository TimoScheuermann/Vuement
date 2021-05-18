<template>
  <div class="tc-dot-spinner">
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TCDotSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.tc-dot-spinner {
  display: inline-grid;
  grid-template-columns: repeat(2, var(--tc-spinner-s));
  grid-gap: var(--tc-spinner-m);

  height: calc((2 * var(--tc-spinner-s)) + var(--tc-spinner-m));
  animation: rotate 2s linear 0s infinite both;

  div {
    display: inline-block;
    height: var(--tc-spinner-s);
    width: var(--tc-spinner-s);
    background: currentColor;
    border-radius: 50%;

    animation: scale 2s ease-in 0s infinite both;

    &:first-child {
      animation-delay: -1s;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(405deg);
    }
  }

  @keyframes scale {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      opacity: 0;
      transform: scale(0.1);
    }
  }
}
</style>
