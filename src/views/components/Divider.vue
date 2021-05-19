<template>
  <div class="view-divider">
    <tc-divider position="leading">
      <h3>Positioning</h3>
    </tc-divider>
    <p>You can define the position of your content inside a divider.</p>
    <br />

    <tc-grid>
      <tc-divider position="leading">leading</tc-divider>
      <tc-divider>center</tc-divider>
      <tc-divider position="trailing">trailing</tc-divider>
    </tc-grid>

    <br />
    <br />
    <tc-divider position="leading">
      <h3>Colors</h3>
    </tc-divider>
    <p>
      By default, tc divider uses the current color for drawing the line. But
      you can specify other colors, using either
      <tc-link routeName="colors">pre-defined colors</tc-link> or setting
      individual hex/hsl colors
    </p>
    <br />

    <tc-grid>
      <tc-divider color="#08f">primary</tc-divider>
      <tc-divider color="error">error</tc-divider>
      <tc-divider color="success">success</tc-divider>
      <tc-divider color="alarm">alarm</tc-divider>
      <tc-divider color="purple">purple</tc-divider>
    </tc-grid>
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
