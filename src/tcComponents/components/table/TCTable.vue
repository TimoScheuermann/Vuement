<template>
  <div class="tc-table">
    <div class="tc-table--wrapper">
      <table
        class="tc-table--table"
        :class="{ 'tc-table--table__striped': striped }"
      >
        <slot />
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCTable extends Vue {
  @Prop({ default: true }) striped!: boolean;
}
</script>

<style lang="scss" scoped>
.tc-table {
  .tc-table--wrapper {
    max-width: 100%;
    overflow: auto;
    border-radius: $border-radius;
  }
  .tc-table--table {
    width: 100%;
    border-collapse: collapse;

    &__striped {
      .tc-tr:nth-child(ODD) {
        background: rgba(#111, 0.05);
        &:hover {
          background: var(--tc-container);
        }
      }
    }
  }
}
</style>
