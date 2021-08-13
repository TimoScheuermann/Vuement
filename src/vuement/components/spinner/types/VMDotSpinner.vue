<template>
  <div class="vm-dot-spinner">
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component<VMDotSpinner>({
  name: 'vmDotSpinner',
})
export default class VMDotSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.vm-dot-spinner {
  display: inline-grid;
  grid-template-columns: repeat(2, var(--vm-spinner-s));
  grid-gap: var(--vm-spinner-m);

  height: calc((2 * var(--vm-spinner-s)) + var(--vm-spinner-m));
  animation: rotate 2s linear 0s infinite both;

  div {
    display: inline-block;
    height: var(--vm-spinner-s);
    width: var(--vm-spinner-s);
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
