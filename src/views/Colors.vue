<template>
  <div class="view-colors" content>
    <h1 @click="open = true">Colors</h1>

    <vm-title title="Components" subtitle="check"></vm-title>
    <br />

    <vm-flow horizontal="start">
      <vm-checkbox title="Thot"></vm-checkbox>

      <vm-action>
        <vm-action-item title="Test" />
        <vm-action-item title="Hallo" />
        <vm-action-item title="Was läuft" />
      </vm-action>

      <vm-input></vm-input>
    </vm-flow>
    <vm-chip-wrapper>
      <vm-chip value="Chip #1" />
      <vm-chip value="Chip #2" />
    </vm-chip-wrapper>

    <vm-divider></vm-divider>

    <vm-hero></vm-hero>

    <vm-link>Test</vm-link>

    <vm-quote title="Hall">Ha</vm-quote>

    <vm-segment>
      <vm-segment-item title="hello"></vm-segment-item>
      <vm-segment-item title="hello"></vm-segment-item>
      <vm-segment-item title="hello"></vm-segment-item>
    </vm-segment>

    <vm-scroll-up></vm-scroll-up>
    <h1 v-for="(_, i) in Array(20)" :key="i">{{ i }}</h1>
    <vm-dialog v-model="open">
      <vm-textarea></vm-textarea>

      <vm-dialog-button slot="buttons" title="accept" />
      <vm-dialog-button slot="buttons" title="cancel" />
    </vm-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Colors extends Vue {
  public open = false;
}
</script>

<style lang="scss" scoped>
.view-colors {
  //
}
</style>
