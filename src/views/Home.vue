<template>
  <div class="view-home" content>
    <tc-flow flow="column" horizontal="center" class="hero-container">
      <div class="title">TC <span>Components</span></div>
      <div class="subtitle">Components for Vue.js</div>
      <p>
        A library of high-quality ready to use components that will help you
        speed up your development workflow.
      </p>

      <tc-flow>
        <tc-button title="Get started" />
      </tc-flow>
    </tc-flow>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.view-home {
  .tc-hero {
    padding-top: env(safe-area-inset-top);

    img {
      max-height: 100px;
      max-width: 90vw;
    }
  }

  .hero-container {
    height: 300px;
    min-height: 80vh;

    p {
      text-align: center;
      max-width: 400px;
      margin: 20px auto;
      opacity: 0.8;
    }

    .title {
      font-weight: bold;
      font-size: 2em;
      span {
        opacity: 0.5;
      }
    }

    .subtitle {
      margin: 10px 0;
      font-weight: bold;
      font-size: 1.4em;
    }
  }
}
</style>
