<template>
  <div class="view-progress">
    <vm-divider position="leading">
      <h3>Types</h3>
    </vm-divider>
    <br />
    <vm-grid>
      <div>
        <b>bar</b>
        <vm-progress :progress="0.174" />
      </div>
      <div>
        <b>ring</b>
        <vm-progress type="ring" :progress="0.174" />
      </div>
    </vm-grid>

    <br /><br />
    <vm-divider position="leading">
      <h3>Colors</h3>
    </vm-divider>
    <br />

    <vm-grid>
      <vm-progress type="ring" color="#08f" :progress="0.573" />
      <vm-progress type="ring" color="success" :progress="0.273" />
      <vm-progress color="alarm" :progress="0.573" />
      <vm-progress color="purple" :progress="0.273" />
    </vm-grid>

    <br /><br />
    <vm-divider position="leading">
      <h3>Ring Options</h3>
    </vm-divider>
    <br />
    <vm-flow>
      <vm-progress type="ring" :progress="0.333" :ringWidth="20" />
      <vm-progress type="ring" :progress="0.333" :ringSize="50" />
      <vm-progress
        type="ring"
        :progress="0.333"
        :ringWidth="20"
        :ringSize="50"
      />
    </vm-flow>

    <br /><br />
    <vm-divider position="leading">
      <h3>Bar Options</h3>
    </vm-divider>
    <br />
    <vm-grid>
      <vm-progress barHeight="10px" :progress="0.333" />
      <vm-progress barHeight="15px" :progress="0.333" />
    </vm-grid>
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
