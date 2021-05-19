<template>
  <div class="view-switch">
    <tc-divider position="leading">
      <h3>Colors</h3>
    </tc-divider>

    <tc-grid width="70">
      <tl-flow flow="column">
        <p><b>primary</b></p>
        <tc-switch color="#08f" :value="true" />
      </tl-flow>
      <tl-flow flow="column">
        <p><b>error</b></p>
        <tc-switch color="error" :value="true" />
      </tl-flow>
      <tl-flow flow="column">
        <p><b>success</b></p>
        <tc-switch color="success" :value="true" />
      </tl-flow>
      <tl-flow flow="column">
        <p><b>alarm</b></p>
        <tc-switch color="alarm" :value="true" />
      </tl-flow>
      <tl-flow flow="column">
        <p><b>purple</b></p>
        <tc-switch color="purple" :value="true" />
      </tl-flow>
    </tc-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Switch extends Vue {}
</script>

<style lang="scss" scoped>
.view-switch {
  p {
    display: inline-block;
  }
}
</style>
