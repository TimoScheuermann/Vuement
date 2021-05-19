<template>
  <div class="view-button">
    <tc-divider position="leading">
      <h3>Variants</h3>
    </tc-divider>
    <p>
      Buttons can have different variants, depending on their use-cases. Every
      variant has its own disabled state.
    </p>

    <tc-grid>
      <div>
        <tc-button title="Filled" />
        <tc-button title="Filled" icon="ti-tccomponents-tc" />
        <tc-button icon="ti-tccomponents-tc" />
        <tc-button title="Filled" :disabled="true" />
      </div>
      <div>
        <tc-button variant="border" title="Border" />
        <tc-button variant="border" title="Border" icon="ti-tccomponents-tc" />
        <tc-button variant="border" icon="ti-tccomponents-tc" />
        <tc-button variant="border" title="Border" :disabled="true" />
      </div>
      <div>
        <tc-button variant="opaque" title="Opaque" />
        <tc-button variant="opaque" title="Opaque" icon="ti-tccomponents-tc" />
        <tc-button variant="opaque" icon="ti-tccomponents-tc" />
        <tc-button variant="opaque" title="Opaque" :disabled="true" />
      </div>
    </tc-grid>

    <br />
    <tc-divider position="leading">
      <h3>Backgrounds</h3>
    </tc-divider>
    <p>
      You can change the appearance of a button even more by setting different
      colors. Here are some examples. You can use
      <tc-link routeName="colors">pre-defined</tc-link> colors or asign custom
      hex/rgb/hsl values.
    </p>

    <tc-grid>
      <div>
        <tc-button background="#08f" variant="border" title="Primary" />
        <tc-button
          background="#08f"
          title="Primary"
          icon="ti-tccomponents-tc"
        />
        <tc-button
          background="#08f"
          variant="opaque"
          icon="ti-tccomponents-tc"
        />
        <tc-button background="#08f" title="Primary" :disabled="true" />
      </div>
      <div>
        <tc-button variant="border" title="Error" />
        <tc-button title="Error" icon="ti-tccomponents-tc" />
        <tc-button variant="opaque" icon="ti-tccomponents-tc" />
        <tc-button title="Error" :disabled="true" />
      </div>
      <div>
        <tc-button background="success" variant="border" title="Success" />
        <tc-button
          background="success"
          title="Success"
          icon="ti-tccomponents-tc"
        />
        <tc-button
          background="success"
          variant="opaque"
          icon="ti-tccomponents-tc"
        />
        <tc-button background="success" title="Success" :disabled="true" />
      </div>
      <div>
        <tc-button background="alarm" variant="border" title="Alarm" />
        <tc-button background="alarm" title="Alarm" icon="ti-tccomponents-tc" />
        <tc-button
          background="alarm"
          variant="opaque"
          icon="ti-tccomponents-tc"
        />
        <tc-button background="alarm" title="Alarm" :disabled="true" />
      </div>
      <div>
        <tc-button background="purple" variant="border" title="Purple" />
        <tc-button
          background="purple"
          title="Purple"
          icon="ti-tccomponents-tc"
        />
        <tc-button
          background="purple"
          variant="opaque"
          icon="ti-tccomponents-tc"
        />
        <tc-button background="purple" title="Purple" :disabled="true" />
      </div>
    </tc-grid>
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
