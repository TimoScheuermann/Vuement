<template>
  <div class="tc-spinner" :style="marginStyle + sizeStyle + colorStyle">
    <component :is="spinnerType" />
  </div>
</template>

<script lang="ts">
import { getColor } from '@/tcComponents/util';
import { Component, Prop, Vue } from 'vue-property-decorator';
import TCBounceSpinner from './types/TCBounceSpinner.vue';
import TCDotSpinner from './types/TCDotSpinner.vue';
import TCBarSpinner from './types/TCBarSpinner.vue';
import TCGridSpinner from './types/TCGridSpinner.vue';
import TCPropagateSpinner from './types/TCPropagateSpinner.vue';
import TCPulseSpinner from './types/TCPulseSpinner.vue';
import TCRotateSpinner from './types/TCRotateSpinner.vue';
import TCScaleSpinner from './types/TCScaleSpinner.vue';
import TCSquareSpinner from './types/TCSquareSpinner.vue';
import TCDotsSpinner from './types/TCDotsSpinner.vue';

@Component({
  components: {
    TCBounceSpinner,
    TCDotSpinner,
    TCBarSpinner,
    TCGridSpinner,
    TCPropagateSpinner,
    TCPulseSpinner,
    TCRotateSpinner,
    TCScaleSpinner,
    TCSquareSpinner,
    TCDotsSpinner,
  },
})
export default class TCSpinner extends Vue {
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
      return `TC${type}Spinner`;
    }
    return `TCBarSpinner`;
  }

  get sizeStyle(): string {
    return `--tc-spinner-s:${this.size || '20px'};`;
  }

  get marginStyle(): string {
    return `--tc-spinner-m:${this.margin || '5px'};`;
  }

  get colorStyle(): string {
    if (!this.color) return '';
    return `color:${getColor(this, this.color)};`;
  }
}
</script>

<style lang="scss" scoped>
.tc-spinner {
  display: inline-flex;
}
</style>
