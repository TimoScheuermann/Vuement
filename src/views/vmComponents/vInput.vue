<template>
  <div class="view-details-input">
    <vm-divider position="leading">
      <h3>Examples</h3>
    </vm-divider>
    <p>
      vmInput has different options, like title, placeholder, type, icon,
      disabled and more. Below are some examples.
    </p>
    <vm-grid width="150">
      <vm-input title="Text Input" />
      <vm-input title="Text + Icon" icon="ti-user-filled" />
      <vm-input title="Number Input" type="number" />
      <vm-input title="Number + Icon" icon="ti-sort-numeric" />
      <vm-input title="Placeholder" placeholder="Placeholder" />
      <vm-input title="Disabled" :disabled="true" />
    </vm-grid>

    <br /><br />
    <vm-divider position="leading">
      <h3>Outlines</h3>
    </vm-divider>
    <p>
      You can inform the user about wrong or correct inputs by displaying an
      outline.
    </p>
    <vm-grid width="150">
      <vm-input title="Correct Inout" value="Squirrel" outline="success" />
      <vm-input title="Wrong Input" value="Fox" outline="error" />
      <vm-input
        value="1234"
        type="password"
        title="Weak Password"
        outline="alarm"
      />
    </vm-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DetailsVInput extends Vue {}
</script>

<style lang="scss" scoped>
.view-details-input {
  //
}
</style>
