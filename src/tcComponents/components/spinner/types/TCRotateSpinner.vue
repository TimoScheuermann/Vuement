<template>
  <div class="tc-rotate-spinner">
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TCRotateSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.tc-rotate-spinner {
  display: inline-grid;
  grid-template-rows: repeat(3, var(--tc-spinner-s));
  grid-gap: var(--tc-spinner-m);

  & > div {
    grid-row: 2 / 2;
    display: grid;
    grid-template-columns: repeat(3, var(--tc-spinner-s));
    grid-gap: var(--tc-spinner-m);

    animation: anim 1.5s ease 0s infinite both;

    div {
      height: var(--tc-spinner-s);
      border-radius: 50%;
      background: currentColor;

      &:not(:nth-child(2)) {
        opacity: 0.66;
        transform: scale(0.85);
      }
    }
  }

  @keyframes anim {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
