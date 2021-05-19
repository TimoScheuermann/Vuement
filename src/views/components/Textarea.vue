<template>
  <div class="view-textarea">
    <tc-divider position="leading">
      <h3>Examples</h3>
    </tc-divider>
    <br />
    <tc-grid>
      <tc-textarea />
      <tc-textarea placeholder="Tell us something about yourself" />
      <tc-textarea value="I like squirrels" />

      <tc-textarea title="Anything else?" :rows="2" />
    </tc-grid>
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
