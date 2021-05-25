<template>
  <div class="view-input">
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

    <br /><br />
    <vm-divider position="leading">
      <h3>Types</h3>
    </vm-divider>
    <p>You can assign the following input types to vmInput.</p>
    <vm-flow horizontal="start">
      <vm-chip v-for="t in types" :key="t" @click="type = t" :value="t" />
    </vm-flow>
    <br />
    <vm-input :placeholder="type" :type="type" />

    <br /><br />
    <vm-divider position="leading">
      <h3>Colors</h3>
    </vm-divider>
    TODO:
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  public type = 'text';
  public types = [
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'month',
    'number',
    'password',
    'range',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ];
}
</script>

<style lang="scss" scoped>
.view-input {
  //
}
</style>
