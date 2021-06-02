<template>
  <div class="vm-grid" :style="gridMode + gridGap + gridWidth">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VMGrid extends Vue {
  @Prop({ default: '200px' }) width!: string;
  @Prop({ default: 'auto-fill' }) mode!: string;
  @Prop({ default: '30px' }) gap!: string;

  get gridMode(): string {
    return `--vm-grid-mode:${this.mode};`;
  }

  get gridGap(): string {
    return `--vm-grid-gap:${this.transformNumber(this.gap)};`;
  }

  get gridWidth(): string {
    return `--vm-grid-width:${this.transformNumber(this.width)};`;
  }

  public transformNumber(number: string | number): string {
    if (isNaN(+number)) return `${number}`;
    return number + 'px';
  }
}
</script>

<style lang="scss" scoped>
.vm-grid {
  display: grid;
  grid-gap: var(--vm-grid-gap);
  grid-template-columns: repeat(
    var(--vm-grid-mode),
    minmax(var(--vm-grid-width), 1fr)
  );
}
</style>
