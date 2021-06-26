<template>
  <div class="view-details-card">
    <h3>Card Types</h3>
    <br />
    <vm-grid>
      <vm-card
        type="frosted"
        :image="$store.getters.prevImage"
        title="Frosted"
        subtitle="Cardtype"
      >
        <span slot="header">Header</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </vm-card>
      <vm-card
        type="preview"
        :image="$store.getters.prevImage"
        title="Preview"
        subtitle="Cardtype"
      >
        <span slot="header">Header</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </vm-card>
      <vm-card
        type="fullscreen"
        :image="$store.getters.prevImage"
        title="Fullscreen"
        subtitle="Cardtype"
        color="#fff"
      >
        <span slot="header">Header</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </vm-card>

      <vm-card
        type="plain"
        :image="$store.getters.prevImage"
        title="Plain"
        subtitle="Cardtype"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </vm-card>
    </vm-grid>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DetailsVCard extends Vue {}
</script>

<style lang="scss" scoped>
.view-details-card {
  //
}
</style>
