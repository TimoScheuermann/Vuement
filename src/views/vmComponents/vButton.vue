<template>
  <div class="view-details-button">
    <h3>Variants</h3>
    <p>
      Buttons can have different variants, depending on their use-cases. Every
      variant has its own disabled state.
    </p>

    <div>
      <vm-button title="Filled" />
      <vm-button title="Filled" icon="ti-heart" />
      <vm-button icon="ti-heart" />
      <vm-button title="Filled" :disabled="true" />
    </div>
    <br />
    <div>
      <vm-button variant="border" title="Border" />
      <vm-button variant="border" title="Border" icon="ti-heart" />
      <vm-button variant="border" icon="ti-heart" />
      <vm-button variant="border" title="Border" :disabled="true" />
    </div>
    <br />
    <div>
      <vm-button variant="opaque" title="Opaque" />
      <vm-button variant="opaque" title="Opaque" icon="ti-heart" />
      <vm-button variant="opaque" icon="ti-heart" />
      <vm-button variant="opaque" title="Opaque" :disabled="true" />
    </div>
    <br />
    <div>
      <vm-button variant="transparent" title="Transparent" />
      <vm-button variant="transparent" title="Transparent" icon="ti-heart" />
      <vm-button variant="transparent" icon="ti-heart" />
      <vm-button variant="transparent" title="Transparent" :disabled="true" />
    </div>

    <h3>Backgrounds</h3>
    <p>
      You can change the appearance of a button even more by setting different
      backgrounds. Here are some examples. You can use
      <vm-link routeName="colors">pre-defined</vm-link> colors or assign custom
      hex/rgb/hsl values.
    </p>

    <div>
      <vm-button variant="border" title="Primary" />
      <vm-button title="Primary" icon="ti-heart" />
      <vm-button variant="opaque" icon="ti-heart" />
      <vm-button title="Primary" :disabled="true" />
    </div>
    <br />
    <div>
      <vm-button background="error" variant="border" title="Error" />
      <vm-button background="error" title="Error" icon="ti-heart" />
      <vm-button background="error" variant="opaque" icon="ti-heart" />
      <vm-button background="error" title="Error" :disabled="true" />
    </div>
    <br />
    <div>
      <vm-button background="success" variant="border" title="Success" />
      <vm-button background="success" title="Success" icon="ti-heart" />
      <vm-button background="success" variant="opaque" icon="ti-heart" />
      <vm-button background="success" title="Success" :disabled="true" />
    </div>
    <br />
    <div>
      <vm-button background="alarm" variant="border" title="Alarm" />
      <vm-button background="alarm" title="Alarm" icon="ti-heart" />
      <vm-button background="alarm" variant="opaque" icon="ti-heart" />
      <vm-button background="alarm" title="Alarm" :disabled="true" />
    </div>
    <br />
    <div>
      <vm-button background="purple" variant="border" title="Purple" />
      <vm-button background="purple" title="Purple" icon="ti-heart" />
      <vm-button background="purple" variant="opaque" icon="ti-heart" />
      <vm-button background="purple" title="Purple" :disabled="true" />
    </div>

    <br />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DetailsVButton extends Vue {}
</script>

<style lang="scss" scoped>
.view-details-button {
  //
}
</style>
