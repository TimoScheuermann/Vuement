<template>
  <div class="view-spinner">
    <vm-divider position="leading">
      <h3>Bar Spinner</h3>
    </vm-divider>
    <br />
    <vm-spinner type="bar" size="10px" />

    <br /><br />
    <vm-divider position="leading">
      <h3>Bounce Spinner</h3>
    </vm-divider>
    <br />
    <vm-spinner type="bounce" size="30px" />

    <br /><br />
    <vm-divider position="leading">
      <h3>Dot Spinner</h3>
    </vm-divider>
    <br />
    <vm-spinner type="dot" size="15px" />

    <br /><br />
    <vm-divider position="leading">
      <h3>Dots Spinner</h3>
    </vm-divider>
    <br />
    <vm-spinner type="dots" size="7.5px" />

    <br /><br />
    <vm-divider position="leading">
      <h3>Grid Spinner</h3>
    </vm-divider>
    <br />
    <vm-spinner type="grid" size="10px" />

    <br /><br />
    <vm-divider position="leading">
      <h3>Propagate Spinner</h3>
    </vm-divider>
    <br />
    <vm-spinner type="propagate" />

    <br /><br />
    <vm-divider position="leading">
      <h3>Pulse Spinner</h3>
    </vm-divider>
    <br />
    <vm-spinner type="pulse" />

    <br /><br />
    <vm-divider position="leading">
      <h3>Rotate Spinner</h3>
    </vm-divider>
    <br />
    <vm-spinner type="rotate" size="10px" />

    <br /><br />
    <vm-divider position="leading">
      <h3>Scale Spinner</h3>
    </vm-divider>
    <br />
    <vm-spinner type="scale" size="30px" />

    <br /><br />
    <vm-divider position="leading">
      <h3>Square Spinner</h3>
    </vm-divider>
    <br />
    <vm-spinner type="square" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Spinner extends Vue {}
</script>

<style lang="scss" scoped>
.view-spinner {
  //
}
</style>
