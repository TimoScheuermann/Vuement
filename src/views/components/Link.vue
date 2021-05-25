<template>
  <div class="view-link">
    <vm-divider position="leading">
      <h3>Examples</h3>
    </vm-divider>
    <p>
      Use links to add <vm-link routeName="vmLink">navigations</vm-link> inside
      paragraphs.
    </p>

    <vm-grid width="100">
      <div>
        <vm-link color="#08f" routeName="vmLink">Primary color</vm-link>
      </div>
      <div>
        <vm-link color="error" routeName="vmLink">Error color</vm-link>
      </div>
      <div>
        <vm-link color="success" routeName="vmLink">Success color</vm-link>
      </div>
      <div>
        <vm-link color="alarm" routeName="vmLink">Alarm color</vm-link>
      </div>
    </vm-grid>
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
