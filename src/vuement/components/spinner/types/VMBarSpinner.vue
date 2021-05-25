<template>
  <div class="vm-bar-spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VMBarSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.vm-bar-spinner {
  height: calc(3.5 * var(--vm-spinner-s));
  width: calc(3.5 * var(--vm-spinner-s));
  position: relative;

  div {
    transform-origin: calc(1.75 * var(--vm-spinner-s))
      calc(1.75 * var(--vm-spinner-s));

    &::before {
      content: '';
      position: absolute;
      background: currentColor;
      height: var(--vm-spinner-s);
      width: calc(var(--vm-spinner-s) / 3);
      border-radius: var(--vm-spinner-s);
      top: 0%;
      left: 50%;
      transform: translate(-50%, 0%);
    }

    $dur: 1;
    animation: anim #{$dur}s ease-in-out 0s infinite both;

    @for $i from 1 through 8 {
      &:nth-child(#{$i}) {
        transform: rotate(#{45 * $i}deg);
        animation-delay: #{-$dur + ($i * $dur / 8)}s;
      }
    }
  }

  @keyframes anim {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }
}
</style>
