<template>
  <div class="vm-pulse-spinner">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VMPulseSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.vm-pulse-spinner {
  display: inline-grid;
  grid-template-columns: repeat(3, var(--vm-spinner-s));
  grid-template-rows: var(--vm-spinner-s);
  grid-gap: var(--vm-spinner-m);

  div {
    background: currentColor;
    border-radius: 50%;

    animation: anim 1s ease 0s infinite alternate both;

    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        animation-delay: #{$i / 3}s;
      }
    }
  }

  @keyframes anim {
    to {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }
}
</style>
