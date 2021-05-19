<template>
  <div class="view-link">
    <tc-divider position="leading">
      <h3>Examples</h3>
    </tc-divider>
    <p>
      Use links to add <tc-link routeName="tcLink">navigations</tc-link> inside
      paragraphs.
    </p>

    <tc-grid width="100">
      <div>
        <tc-link color="#08f" routeName="tcLink">Primary color</tc-link>
      </div>
      <div>
        <tc-link color="error" routeName="tcLink">Error color</tc-link>
      </div>
      <div>
        <tc-link color="success" routeName="tcLink">Success color</tc-link>
      </div>
      <div>
        <tc-link color="alarm" routeName="tcLink">Alarm color</tc-link>
      </div>
    </tc-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Link extends Vue {}
</script>

<style lang="scss" scoped>
.view-link {
  //
}
</style>
