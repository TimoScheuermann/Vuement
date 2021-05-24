<template>
  <td class="tc-td" :colspan="colspan">
    <slot />
  </td>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCTd extends Vue {
  @Prop({ default: 1 }) colspan!: number;
}
</script>

<style lang="scss" scoped>
.tc-td {
  text-align: inherit;
  vertical-align: middle;
  padding: 5px 10px;
}
</style>
