<template>
  <input
    class="vm-slider"
    :style="vmColor"
    type="range"
    :min="min"
    :max="max"
    :step="step"
    v-model="innerVal"
  />
</template>

<script lang="ts">
import { getColor } from '@/vuement/util';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class VMSlider extends Vue {
  @Prop({ default: 'primary' }) color!: string;
  @Prop({ default: 1 }) min!: number;
  @Prop({ default: 10 }) max!: number;
  @Prop({ default: 1 }) step!: number;
  @Prop({ default: 1 }) value!: number;

  public innerVal = this.value || 1;

  get vmColor(): string {
    return `--vm-slider-c:${getColor(this.color)};`;
  }

  @Watch('value', { immediate: true })
  valueChanged(): void {
    if (this.value) this.innerVal = this.value;
  }

  @Watch('innerVal', { immediate: true })
  innerValChanged(): void {
    this.$emit('input', this.innerVal);
  }
}
</script>

<style lang="scss" scoped>
.vm-slider {
  display: flex;
  flex: 1 1 0px;

  appearance: none;
  outline: none;
  height: 7.5px;
  width: calc(100% - 7.5px);
  border-radius: 5px;
  margin: 7.5px 2.5px;

  background: var(--vm-container);

  &::-webkit-slider-thumb {
    $size: 17.5px;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    width: $size;
    border-radius: $size;
    height: $size;
    background: var(--vm-slider-c);
    cursor: grab;
  }
}
</style>
