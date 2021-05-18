<template>
  <div class="tc-scale-spinner">
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
export default class TCScaleSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.tc-scale-spinner {
  display: inline-grid;
  grid-template-columns: repeat(5, calc(var(--tc-spinner-s) / 5));
  grid-gap: var(--tc-spinner-m);

  div {
    height: var(--tc-spinner-s);
    background: currentColor;
    border-radius: var(--tc-spinner-s);
    animation: anim 1s ease-in-out 0s infinite alternate both;

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        animation-delay: #{($i / 10) - 10}s;
      }
    }
  }

  @keyframes anim {
    75%,
    100% {
      transform: scaleY(0.5);
      opacity: 0.5;
    }
  }
}
</style>
