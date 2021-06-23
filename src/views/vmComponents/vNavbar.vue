<template>
  <div class="view-details-navbar">
    <vm-grid>
      <vm-card></vm-card>
    </vm-grid>
    <vm-flow horizontal="start">
      <vm-container>Hallo</vm-container>
      <vm-input />
      <vm-checkbox />
      <vm-select />
    </vm-flow>

    <vm-flow horizontal="start">
      <vm-container>
        <vm-container>Hallo</vm-container>
      </vm-container>
      <vm-container>
        <vm-input />
      </vm-container>
      <vm-container>
        <vm-checkbox />
      </vm-container>
      <vm-container>
        <vm-select />
      </vm-container>
    </vm-flow>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DetailsVNavbar extends Vue {}
</script>

<style lang="scss" scoped>
.view-details-navbar {
  //
}
</style>
