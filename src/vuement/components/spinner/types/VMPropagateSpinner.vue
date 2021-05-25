<template>
  <div class="vm-propagate-spinner">
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
export default class VMPropagateSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.vm-propagate-spinner {
  display: inline-block;
  height: var(--vm-spinner-s);
  width: calc(6 * var(--vm-spinner-s) + 5 * var(--vm-spinner-m));
  position: relative;

  margin: 0 calc(var(--vm-spinner-s) * 0.2);

  div {
    position: absolute;
    height: var(--vm-spinner-s);
    width: var(--vm-spinner-s);
    border-radius: var(--vm-spinner-s);
    background: currentColor;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    animation: a 2s ease-in-out 0s infinite both;

    &:nth-child(1) {
      animation-name: a;
    }
    &:nth-child(2) {
      animation-name: b;
    }
    &:nth-child(3) {
      animation-name: c;
    }
    &:nth-child(4) {
      animation-name: d;
    }
    &:nth-child(5) {
      animation-name: e;
    }
    &:nth-child(6) {
      animation-name: f;
    }
  }

  @keyframes a {
    0%,
    100% {
      left: 50%;
    }
    15%,
    30% {
      left: calc(100% / 5 * 2);
      transform: translate(-50%, -50%) scale(0.8);
    }
    45%,
    60% {
      left: calc(100% / 5 * 1);
      transform: translate(-50%, -50%) scale(0.6);
    }
    75%,
    90% {
      left: 0%;
      transform: translate(-50%, -50%) scale(0.4);
    }
  }

  @keyframes b {
    0%,
    100% {
      left: 50%;
    }
    15%,
    30% {
      left: calc(100% / 5 * 2);
      transform: translate(-50%, -50%) scale(0.8);
    }
    45%,
    90% {
      left: calc(100% / 5 * 1);
      transform: translate(-50%, -50%) scale(0.6);
    }
  }

  @keyframes c {
    0%,
    100% {
      left: 50%;
    }
    15%,
    90% {
      left: calc(100% / 5 * 2);
      transform: translate(-50%, -50%) scale(0.8);
    }
  }

  @keyframes d {
    0%,
    100% {
      left: 50%;
    }
    15%,
    90% {
      left: calc(100% / 5 * 3);
      transform: translate(-50%, -50%) scale(0.8);
    }
  }

  @keyframes e {
    0%,
    100% {
      left: 50%;
    }
    15%,
    30% {
      left: calc(100% / 5 * 3);
      transform: translate(-50%, -50%) scale(0.8);
    }
    45%,
    90% {
      left: calc(100% / 5 * 4);
      transform: translate(-50%, -50%) scale(0.6);
    }
  }

  @keyframes f {
    0%,
    100% {
      left: 50%;
    }
    15%,
    30% {
      left: calc(100% / 5 * 3);
      transform: translate(-50%, -50%) scale(0.8);
    }
    45%,
    60% {
      left: calc(100% / 5 * 4);
      transform: translate(-50%, -50%) scale(0.6);
    }
    75%,
    90% {
      left: 100%;
      transform: translate(-50%, -50%) scale(0.4);
    }
  }
}
</style>
