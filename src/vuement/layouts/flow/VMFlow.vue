<template>
  <div class="vm-flow" :class="classes" @click="clicked">
    <slot />
  </div>
</template>

<script lang="ts">
import VMLink from '@/vuement/components/link/VMLink.vue';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component<VMFlow>({
  name: 'vmFlow',
})
export default class VMFlow extends Mixins(VMLink) {
  @Prop({ default: 'center' }) vertical!: string;
  @Prop({ default: 'space-between' }) horizontal!: string;
  @Prop({ default: 'row' }) flow!: string;

  get classes(): string {
    const classes = ['h-' + this.horizontal, 'v-' + this.vertical];
    if (this.flow === 'column') classes.push('vm-flow__column');
    return classes.join(' ');
  }
}
</script>

<style lang="scss" scoped>
.vm-flow {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &.vm-flow__column {
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
