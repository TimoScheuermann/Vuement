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
import VMBounceSpinner from './types/VMBounceSpinner.vue';
import VMDotSpinner from './types/VMDotSpinner.vue';
import VMBarSpinner from './types/VMBarSpinner.vue';
import VMGridSpinner from './types/VMGridSpinner.vue';
import VMPropagateSpinner from './types/VMPropagateSpinner.vue';
import VMPulseSpinner from './types/VMPulseSpinner.vue';
import VMRotateSpinner from './types/VMRotateSpinner.vue';
import VMScaleSpinner from './types/VMScaleSpinner.vue';
import VMSquareSpinner from './types/VMSquareSpinner.vue';
import VMDotsSpinner from './types/VMDotsSpinner.vue';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';

@Component({
  components: {
    'vm-bounce-spinner': VMBounceSpinner,
    'vm-dot-spinner': VMDotSpinner,
    'vm-bar-spinner': VMBarSpinner,
    'vm-grid-spinner': VMGridSpinner,
    'vm-propagate-spinner': VMPropagateSpinner,
    'vm-pulse-spinner': VMPulseSpinner,
    'vm-rotate-spinner': VMRotateSpinner,
    'vm-scale-spinner': VMScaleSpinner,
    'vm-square-spinner': VMSquareSpinner,
    'vm-dots-spinner': VMDotsSpinner,
  },
})
export default class VMSpinner extends Mixins(VMCProp) {
  @Prop({ default: 'bar' }) type!: string;
  @Prop({ default: '10px' }) size!: string;
  @Prop({ default: '3px' }) margin!: string;

  get spinnerType(): string {
    const types = [
      'bar',
      'bounce',
      'dot',
      'dots',
      'grid',
      'propagate',
      'pulse',
      'rotate',
      'scale',
      'square',
    ];
    let type = (this.type || '').toLowerCase();
    if (types.includes(type)) {
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
