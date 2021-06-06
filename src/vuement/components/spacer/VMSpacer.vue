<template>
  <div class="vm-spacer" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class VMSpacer extends Vue {}
</script>

<style lang="scss" scoped>
.vm-spacer {
  height: 5px;
  margin: 0;
  padding: 0;
}
</style>
