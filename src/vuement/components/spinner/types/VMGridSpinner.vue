<template>
  <div class="vm-grid-spinner">
    <div></div>
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
export default class VMGridSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.vm-grid-spinner {
  display: inline-grid;
  grid-template-columns: repeat(3, var(--vm-spinner-s));
  grid-template-rows: repeat(3, var(--vm-spinner-s));
  grid-gap: var(--vm-spinner-m);

  div {
    background: currentColor;
    border-radius: 50%;

    animation: anim 1.5s ease 0s infinite alternate-reverse both;

    @for $i from 1 through 9 {
      &:nth-child(#{$i}) {
        animation-delay: #{-1 * ($i * 2.5 % 7)}s;
        animation-duration: #{(($i * 2 % 1.5) + 1) / 1.5}s;
      }
    }
  }

  @keyframes anim {
    to {
      transform: scale(0.75);
      opacity: 0.5;
    }
  }
}
</style>
