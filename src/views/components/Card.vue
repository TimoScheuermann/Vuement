<template>
  <div class="view-card">
    <vm-flow flow="column">
      <b>Card</b>
      <vm-button title="Test"></vm-button>
    </vm-flow>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Card extends Vue {}
</script>

<style lang="scss" scoped>
.view-card {
  //
}
</style>
