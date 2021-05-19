<template>
  <div class="view-interim-component">
    <div class="component-hero">
      <tc-flow>
        <tc-title :title="$route.meta.title" subtitle="Component" />
        <tc-flow>
          <tc-button icon="ti-github" variant="filled" />
          <tc-button icon="ti-back" variant="filled" />
          <tc-button icon="ti-bug" variant="filled" />
        </tc-flow>
      </tc-flow>
    </div>
    <router-view content></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class InterimComponent extends Vue {}
</script>

<style lang="scss" scoped>
.view-interim-component {
  .component-hero {
    padding: 0 5vw;
    padding-top: calc(50px + env(safe-area-inset-top));
    background: var(--tc-container);

    & > .tc-flow {
      min-height: 60px;
      padding: 30px 0;
      margin: 0 auto;
      max-width: 800px;
    }
  }

  [content] {
    padding-top: 20px;
  }
  /deep/ h3 {
    margin: 0;
  }
}
</style>
