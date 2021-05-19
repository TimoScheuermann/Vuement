<template>
  <div class="view-progress">
    <tc-divider position="leading">
      <h3>Types</h3>
    </tc-divider>
    <br />
    <tc-grid>
      <div>
        <b>bar</b>
        <tc-progress :progress="0.174" />
      </div>
      <div>
        <b>ring</b>
        <tc-progress type="ring" :progress="0.174" />
      </div>
    </tc-grid>

    <br /><br />
    <tc-divider position="leading">
      <h3>Colors</h3>
    </tc-divider>
    <br />

    <tc-grid>
      <tc-progress type="ring" color="#08f" :progress="0.573" />
      <tc-progress type="ring" color="success" :progress="0.273" />
      <tc-progress color="alarm" :progress="0.573" />
      <tc-progress color="purple" :progress="0.273" />
    </tc-grid>

    <br /><br />
    <tc-divider position="leading">
      <h3>Ring Options</h3>
    </tc-divider>
    <br />
    <tc-flow>
      <tc-progress type="ring" :progress="0.333" :ringWidth="20" />
      <tc-progress type="ring" :progress="0.333" :ringSize="50" />
      <tc-progress
        type="ring"
        :progress="0.333"
        :ringWidth="20"
        :ringSize="50"
      />
    </tc-flow>

    <br /><br />
    <tc-divider position="leading">
      <h3>Bar Options</h3>
    </tc-divider>
    <br />
    <tc-grid>
      <tc-progress barHeight="10px" :progress="0.333" />
      <tc-progress barHeight="15px" :progress="0.333" />
    </tc-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Progress extends Vue {}
</script>

<style lang="scss" scoped>
.view-progress {
  //
}
</style>
