<template>
  <div
    class="vm-spinner"
    :style="{
      '--vm-color': vmColor,
      '--vm-spinner-s': size,
      '--vm-spinner-m': margin,
    }"
  >
    <component :is="spinnerType" />
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import * as types from './types';

@Component({
  components: { ...types },
})
export default class VMSpinner extends Mixins(VMCProp) {
  @Prop({ default: 'bar' }) type!: string;
  @Prop({ default: '10px' }) size!: string;
  @Prop({ default: '3px' }) margin!: string;

  get types(): string[] {
    return Object.keys(types).map((x) =>
      x.toLowerCase().substring(2, x.length - 7)
    );
  }

  get spinnerType(): string {
    let type = (this.type || '').toLowerCase();
    if (this.types.includes(type)) {
      return `vm-${type}-spinner`;
    }
    return `vm-bar-spinner`;
  }
}
</script>

<style lang="scss" scoped>
.vm-spinner {
  display: inline-flex;
  color: rgba(var(--vm-color), 1);
}
</style>
