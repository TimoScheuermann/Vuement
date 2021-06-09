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

      <br /><br />

      <vm-action :title="'4 retweets, 41 likes\nVia Buffer'" :value="true">
        <vm-action-group title="Save for later" icon="ti-bookmark">
          <vm-action-item title="All" icon="ti-bookmark" />
          <vm-spacer></vm-spacer>
          <vm-action-item title="New Folder" icon="ti-plus" />
        </vm-action-group>
        <vm-action-item title="Reply" icon="ti-reply" />
        <vm-action-item title="Retweet" icon="ti-repeat" />
        <vm-action-item title="Quote" icon="ti-chat-bubbles" />
        <vm-action-group title="Save for later" icon="ti-bookmark">
          <vm-action-item title="All" icon="ti-bookmark" />
          <vm-spacer></vm-spacer>
          <vm-action-item title="New Folder" icon="ti-plus" />
        </vm-action-group>
        <vm-spacer></vm-spacer>
        <vm-action-item title="Edit" icon="ti-pencil" />
        <vm-action-item title="Delete" icon="ti-trashcan-alt" />
        <vm-action-group title="Save for later" icon="ti-bookmark">
          <vm-action-item title="All" icon="ti-bookmark" />
          <vm-spacer></vm-spacer>
          <vm-action-item title="New Folder" icon="ti-plus" />
        </vm-action-group>
      </vm-action>
    </vm-flow>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Card from '@/views/components/Card.vue';

@Component
export default class Home extends Vue {
  send(): void {
    this.$vm.sendNotification({ title: 'Was geht ab', content: Card });
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
