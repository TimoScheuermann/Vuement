<template>
  <div class="vm-spinner" :style="marginStyle + sizeStyle + colorStyle">
    <component :is="spinnerType" />
  </div>
</template>

<script lang="ts">
import { getColor } from '@/vuement/util';
import { Component, Prop, Vue } from 'vue-property-decorator';
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

@Component({
  components: {
    VMBounceSpinner,
    VMDotSpinner,
    VMBarSpinner,
    VMGridSpinner,
    VMPropagateSpinner,
    VMPulseSpinner,
    VMRotateSpinner,
    VMScaleSpinner,
    VMSquareSpinner,
    VMDotsSpinner,
  },
})
export default class VMSpinner extends Vue {
  @Prop({ default: 'bar' }) type!: string;
  @Prop() color!: string;
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
      type = type.charAt(0).toUpperCase() + type.slice(1);
      return `VM${type}Spinner`;
    }
    return `VMBarSpinner`;
  }

  get sizeStyle(): string {
    return `--vm-spinner-s:${this.size || '20px'};`;
  }

  get marginStyle(): string {
    return `--vm-spinner-m:${this.margin || '5px'};`;
  }

  get colorStyle(): string {
    if (!this.color) return '';
    return `color:${getColor(this.color)};`;
  }
}
</script>

<style lang="scss" scoped>
.vm-spinner {
  display: inline-flex;
}
</style>
