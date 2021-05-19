<template>
  <div class="tc-flow" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCFlow extends Vue {
  @Prop({ default: 'center' }) vertical!: string;
  @Prop({ default: 'space-between' }) horizontal!: string;
  @Prop({ default: 'row' }) flow!: string;

  get classes(): string {
    const classes = ['h-' + this.horizontal, 'v-' + this.vertical];
    if (this.flow === 'column') classes.push('tc-flow__column');
    return classes.join(' ');
  }
}
</script>

<style lang="scss" scoped>
.tc-flow {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &.tc-flow__column {
    flex-direction: column;
  }
  &.h-space-between {
    justify-content: space-between;
  }
  &.h-space-around {
    justify-content: space-around;
  }
  &.h-start {
    justify-content: flex-start;
  }
  &.h-end {
    justify-content: flex-end;
  }
  &.v-start {
    align-items: flex-start;
  }
  &.v-end {
    align-items: flex-end;
  }
}
</style>
