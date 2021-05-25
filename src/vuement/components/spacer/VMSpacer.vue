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
  opacity: 0.1;
}
</style>
