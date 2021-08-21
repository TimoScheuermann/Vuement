<template>
  <div class="view-home">
    <img src="assets/logo-subtitle.svg" alt="" />

    <p>
      A library of high-quality ready to use components that will help you speed
      up your development workflow.
    </p>

    <vm-button size="medium" title="Get started" routeName="guide" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.view-home {
  display: grid;
  height: 100vh;
  place-content: center;
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
  width: 90vw;

  img {
    width: 80%;
    max-width: 400px;
    margin: 0 auto;
  }

  p {
    text-align: center;
    color: rgba(var(--vm-color-secondary), 1);
    padding: 40px;
    margin: 0 auto;
    max-width: 400px;
  }

  .vm-button {
    margin: 0 auto;
    width: 200px;
    max-width: 80vw;
  }
}
</style>
