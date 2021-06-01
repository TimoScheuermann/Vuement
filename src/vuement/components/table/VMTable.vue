<template>
  <div class="vm-table">
    <div class="vm-table--wrapper">
      <table
        class="vm-table--table"
        :class="{ 'vm-table--table__striped': striped }"
      >
        <slot />
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VMTable extends Vue {
  @Prop({ default: true }) striped!: boolean;
}
</script>

<style lang="scss" scoped>
.vm-table {
  .vm-table--wrapper {
    max-width: 100%;
    overflow: auto;
    border-radius: $border-radius;
  }
  .vm-table--table {
    width: 100%;
    border-collapse: collapse;

    &__striped {
      .vm-tr:nth-child(ODD) {
        background: var(--vm-paragraph);
        &:hover {
          background: var(--vm-border);
        }
      }
    }
  }
}
</style>
