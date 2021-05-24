<template>
  <div class="tc-spacer" />
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TCSpacer extends Vue {}
</script>

<style lang="scss" scoped>
.tc-spacer {
  height: 5px;
  opacity: 0.1;
}
</style>
