<template>
  <div class="view-divider">
    <vm-divider position="leading">
      <h3>Positioning</h3>
    </vm-divider>
    <p>You can define the position of your content inside a divider.</p>
    <br />

    <vm-grid>
      <vm-divider position="leading">leading</vm-divider>
      <vm-divider>center</vm-divider>
      <vm-divider position="trailing">trailing</vm-divider>
    </vm-grid>

    <br />
    <br />
    <vm-divider position="leading">
      <h3>Colors</h3>
    </vm-divider>
    <p>
      By default, vmDivider uses the current color for drawing the line. But you
      can specify other colors, using either
      <vm-link routeName="colors">pre-defined colors</vm-link> or setting
      individual hex/hsl colors
    </p>
    <br />

    <vm-grid>
      <vm-divider color="#08f">primary</vm-divider>
      <vm-divider color="error">error</vm-divider>
      <vm-divider color="success">success</vm-divider>
      <vm-divider color="alarm">alarm</vm-divider>
      <vm-divider color="purple">purple</vm-divider>
    </vm-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Divider extends Vue {}
</script>

<style lang="scss" scoped>
.view-divider {
  //
}
</style>
