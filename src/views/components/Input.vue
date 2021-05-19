<template>
  <div class="view-input">
    <tc-divider position="leading">
      <h3>Examples</h3>
    </tc-divider>
    <p>
      TC-Input has different options, like title, placeholder, type, icon,
      disabled and more. Below are some examples.
    </p>
    <tc-grid width="150">
      <tc-input title="Text Input" />
      <tc-input title="Text + Icon" icon="ti-user-filled" />
      <tc-input title="Number Input" type="number" />
      <tc-input title="Number + Icon" icon="ti-sort-numeric" />
      <tc-input title="Placeholder" placeholder="Placeholder" />
      <tc-input title="Disabled" :disabled="true" />
    </tc-grid>

    <br /><br />
    <tc-divider position="leading">
      <h3>Outlines</h3>
    </tc-divider>
    <p>
      You can inform the user about wrong or correct inputs by displaying an
      outline.
    </p>
    <tc-grid width="150">
      <tc-input title="Correct Inout" value="Squirrel" outline="success" />
      <tc-input title="Wrong Input" value="Fox" outline="error" />
      <tc-input
        value="1234"
        type="password"
        title="Weak Password"
        outline="alarm"
      />
    </tc-grid>

    <br /><br />
    <tc-divider position="leading">
      <h3>Types</h3>
    </tc-divider>
    <p>You can assign the following input types to TC Input.</p>
    <tc-flow horizontal="start">
      <tc-chip v-for="t in types" :key="t" @click="type = t" :value="t" />
    </tc-flow>
    <br />
    <tc-input :placeholder="type" :type="type" />

    <br /><br />
    <tc-divider position="leading">
      <h3>Colors</h3>
    </tc-divider>
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
