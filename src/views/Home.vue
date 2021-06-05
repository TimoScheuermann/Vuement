<template>
  <div class="view-home" content>
    <vm-flow flow="column" horizontal="center" class="hero-container">
      <img src="assets/logo-subtitle.svg" alt="" />

      <p data-color="red">
        A library of high-quality ready to use components that will help you
        speed up your development workflow.
      </p>

      <vm-flow>
        <vm-button title="Get started" @click="send" />
      </vm-flow>
    </vm-flow>
  </div>
</template>

<script lang="ts">
import { sendNotification } from '@/vuement/dev/functions';
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  public send(): void {
    sendNotification({ text: 'Was geht ab' });
  }
}
</script>

<style lang="scss" scoped>
.view-home {
  .vm-hero {
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

      color: attr(data-color);
    }

    img {
      width: 80%;
      max-width: 400px;
      object-fit: contain;
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
