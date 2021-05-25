<template>
  <div class="view-textarea">
    <vm-divider position="leading">
      <h3>Examples</h3>
    </vm-divider>
    <br />
    <vm-grid>
      <vm-textarea />
      <vm-textarea placeholder="Tell us something about yourself" />
      <vm-textarea value="I like squirrels" />

      <vm-textarea title="Anything else?" :rows="2" />
    </vm-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Textarea extends Vue {}
</script>

<style lang="scss" scoped>
.view-textarea {
  //
}
</style>
