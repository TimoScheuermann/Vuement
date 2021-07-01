<template>
  <div class="vm-tooltip"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { VMTooltipInstance } from './VMTooltip';

@Component
export default class VMTooltip extends Vue {
  @Prop() tooltip!: VMTooltipInstance;
}
</script>

<style lang="scss" scoped>
.vm-tooltip {
  //
}
</style>
