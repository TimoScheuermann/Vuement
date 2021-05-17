<template>
  <div class="view-home">
    <h1>Sizes</h1>
    <h2>Normal</h2>
    <tc-button icon="ti-tccomponents-tc" title="Button" />
    <tc-button title="Button" />
    <tc-button icon="ti-tccomponents-tc" />

    <h2>Medium</h2>
    <tc-button size="medium" icon="ti-tccomponents-tc" title="Button" />
    <tc-button size="medium" title="Button" />
    <tc-button size="medium" icon="ti-tccomponents-tc" />

    <h2>Large</h2>
    <tc-button size="large" icon="ti-tccomponents-tc" title="Button" />
    <tc-button size="large" title="Button" />
    <tc-button size="large" icon="ti-tccomponents-tc" />

    <h1>Colors</h1>

    <h2>primary</h2>
    <tc-button icon="ti-tccomponents-tc" title="Button" />
    <tc-button title="Button" />
    <tc-button icon="ti-tccomponents-tc" />

    <h2>error</h2>
    <tc-button background="error" icon="ti-tccomponents-tc" title="Button" />
    <tc-button background="error" title="Button" />
    <tc-button background="error" icon="ti-tccomponents-tc" />

    <h2>success</h2>
    <tc-button background="success" icon="ti-tccomponents-tc" title="Button" />
    <tc-button background="success" title="Button" />
    <tc-button background="success" icon="ti-tccomponents-tc" />

    <h2>alarm</h2>
    <tc-button background="alarm" icon="ti-tccomponents-tc" title="Button" />
    <tc-button background="alarm" title="Button" />
    <tc-button background="alarm" icon="ti-tccomponents-tc" />

    <h1>Variants</h1>

    <h2>Filled</h2>
    <tc-button background="primary" title="Button" />
    <tc-button background="error" title="Button" />
    <tc-button background="success" title="Button" />
    <tc-button background="alarm" title="Button" />

    <h2>Border</h2>
    <tc-button variant="border" background="primary" title="Button" />
    <tc-button variant="border" background="error" title="Button" />
    <tc-button variant="border" background="success" title="Button" />
    <tc-button variant="border" background="alarm" title="Button" />

    <h2>Opaque</h2>
    <tc-button variant="opaque" background="primary" title="Button" />
    <tc-button variant="opaque" background="error" title="Button" />
    <tc-button variant="opaque" background="success" title="Button" />
    <tc-button variant="opaque" background="alarm" title="Button" />

    <h1>Variants + Disabled</h1>

    <h2>Filled</h2>
    <tc-button :disabled="true" background="primary" title="Button" />
    <tc-button :disabled="true" background="error" title="Button" />
    <tc-button :disabled="true" background="success" title="Button" />
    <tc-button :disabled="true" background="alarm" title="Button" />

    <h2>Border</h2>
    <tc-button
      :disabled="true"
      variant="border"
      background="primary"
      title="Button"
    />
    <tc-button
      :disabled="true"
      variant="border"
      background="error"
      title="Button"
    />
    <tc-button
      :disabled="true"
      variant="border"
      background="success"
      title="Button"
    />
    <tc-button
      :disabled="true"
      variant="border"
      background="alarm"
      title="Button"
    />

    <h2>Opaque</h2>
    <tc-button
      :disabled="true"
      variant="opaque"
      background="primary"
      title="Button"
    />
    <tc-button
      :disabled="true"
      variant="opaque"
      background="error"
      title="Button"
    />
    <tc-button
      :disabled="true"
      variant="opaque"
      background="success"
      title="Button"
    />
    <tc-button
      :disabled="true"
      variant="opaque"
      background="alarm"
      title="Button"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.view-home {
  padding: 20px;
  //
}
</style>
