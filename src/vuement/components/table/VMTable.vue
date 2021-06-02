<template>
  <div class="vm-table">
    <div class="vm-table--wrapper">
      <transition-group
        tag="table"
        name="vm-table-row-anim"
        class="vm-table--table"
        :class="{ 'vm-table--table__striped': striped }"
      >
        <tr
          key="vm-table-head"
          class="vm-table--table__head"
          v-if="$slots.head"
        >
          <slot name="head" />
        </tr>
        <slot />
      </transition-group>
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

    &__head {
      background: rgba(var(--vm-container), 1);
    }

    &__striped {
      /deep/ .vm-tr:nth-child(ODD) {
        background: rgba(var(--vm-paragraph), 1);
        &:hover {
          background: rgba(var(--vm-border), 1);
        }
      }
    }
  }
}
.vm-table-row-anim-move {
  transition: transform 1s;
}
</style>
