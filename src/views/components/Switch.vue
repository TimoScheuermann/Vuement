<template>
  <div class="view-switch">
    <vm-divider position="leading">
      <h3>Colors</h3>
    </vm-divider>

    <vm-grid width="70">
      <vm-flow flow="column">
        <p><b>primary</b></p>
        <vm-switch color="#08f" :value="true" />
      </vm-flow>
      <vm-flow flow="column">
        <p><b>error</b></p>
        <vm-switch color="error" :value="true" />
      </vm-flow>
      <vm-flow flow="column">
        <p><b>success</b></p>
        <vm-switch color="success" :value="true" />
      </vm-flow>
      <vm-flow flow="column">
        <p><b>alarm</b></p>
        <vm-switch color="alarm" :value="true" />
      </vm-flow>
      <vm-flow flow="column">
        <p><b>purple</b></p>
        <vm-switch color="purple" :value="true" />
      </vm-flow>
    </vm-grid>
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
