<template>
  <div class="view-button">
    <vm-divider position="leading">
      <h3>Variants</h3>
    </vm-divider>
    <p>
      Buttons can have different variants, depending on their use-cases. Every
      variant has its own disabled state.
    </p>

    <vm-grid>
      <div>
        <vm-button title="Filled" />
        <vm-button title="Filled" icon="ti-tccomponents-tc" />
        <vm-button icon="ti-tccomponents-tc" />
        <vm-button title="Filled" :disabled="true" />
      </div>
      <div>
        <vm-button variant="border" title="Border" />
        <vm-button variant="border" title="Border" icon="ti-tccomponents-tc" />
        <vm-button variant="border" icon="ti-tccomponents-tc" />
        <vm-button variant="border" title="Border" :disabled="true" />
      </div>
      <div>
        <vm-button variant="opaque" title="Opaque" />
        <vm-button variant="opaque" title="Opaque" icon="ti-tccomponents-tc" />
        <vm-button variant="opaque" icon="ti-tccomponents-tc" />
        <vm-button variant="opaque" title="Opaque" :disabled="true" />
      </div>
    </vm-grid>

    <br />
    <vm-divider position="leading">
      <h3>Backgrounds</h3>
    </vm-divider>
    <p>
      You can change the appearance of a button even more by setting different
      colors. Here are some examples. You can use
      <vm-link routeName="colors">pre-defined</vm-link> colors or asign custom
      hex/rgb/hsl values.
    </p>

    <vm-grid>
      <div>
        <vm-button background="#08f" variant="border" title="Primary" />
        <vm-button
          background="#08f"
          title="Primary"
          icon="ti-tccomponents-tc"
        />
        <vm-button
          background="#08f"
          variant="opaque"
          icon="ti-tccomponents-tc"
        />
        <vm-button background="#08f" title="Primary" :disabled="true" />
      </div>
      <div>
        <vm-button variant="border" title="Error" />
        <vm-button title="Error" icon="ti-tccomponents-tc" />
        <vm-button variant="opaque" icon="ti-tccomponents-tc" />
        <vm-button title="Error" :disabled="true" />
      </div>
      <div>
        <vm-button background="success" variant="border" title="Success" />
        <vm-button
          background="success"
          title="Success"
          icon="ti-tccomponents-tc"
        />
        <vm-button
          background="success"
          variant="opaque"
          icon="ti-tccomponents-tc"
        />
        <vm-button background="success" title="Success" :disabled="true" />
      </div>
      <div>
        <vm-button background="alarm" variant="border" title="Alarm" />
        <vm-button background="alarm" title="Alarm" icon="ti-tccomponents-tc" />
        <vm-button
          background="alarm"
          variant="opaque"
          icon="ti-tccomponents-tc"
        />
        <vm-button background="alarm" title="Alarm" :disabled="true" />
      </div>
      <div>
        <vm-button background="purple" variant="border" title="Purple" />
        <vm-button
          background="purple"
          title="Purple"
          icon="ti-tccomponents-tc"
        />
        <vm-button
          background="purple"
          variant="opaque"
          icon="ti-tccomponents-tc"
        />
        <vm-button background="purple" title="Purple" :disabled="true" />
      </div>
    </vm-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
.view-button {
  //
}
</style>
