<template>
  <div class="view-details-spinner">
    <h3>Types</h3>
    <p>
      Spinners come in a variety of types. You can also change their colors and
      scale.
    </p>

    <vm-grid width="100">
      <vm-flow flow="column">
        <h4>bar</h4>
        <vm-spinner type="bar" size="10px" />
      </vm-flow>
      <vm-flow flow="column">
        <h4>bounce</h4>
        <vm-spinner type="bounce" size="30px" />
      </vm-flow>
      <vm-flow flow="column">
        <h4>dot</h4>
        <vm-spinner type="dot" size="15px" />
      </vm-flow>
      <vm-flow flow="column">
        <h4>dots</h4>
        <vm-spinner type="dots" size="7.5px" />
      </vm-flow>
      <vm-flow flow="column">
        <h4>grid</h4>
        <vm-spinner type="grid" size="10px" />
      </vm-flow>
      <vm-flow flow="column">
        <h4>propagate</h4>
        <vm-spinner type="propagate" />
      </vm-flow>
      <vm-flow flow="column">
        <h4>pulse</h4>
        <vm-spinner type="pulse" />
      </vm-flow>
      <vm-flow flow="column">
        <h4>rotate</h4>
        <vm-spinner type="rotate" size="10px" />
      </vm-flow>
      <vm-flow flow="column">
        <h4>scale</h4>
        <vm-spinner type="scale" size="30px" />
      </vm-flow>
      <vm-flow flow="column">
        <h4>square</h4>
        <vm-spinner type="square" />
      </vm-flow>
    </vm-grid>
    <br />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DetailsVSpinner extends Vue {}
</script>

<style lang="scss" scoped>
.view-details-spinner {
  //
}
</style>
