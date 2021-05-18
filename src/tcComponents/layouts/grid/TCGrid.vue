<template>
  <div class="tc-grid" :style="gridMode + gridGap + gridWidth">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCGrid extends Vue {
  @Prop({ default: '200px' }) width!: string;
  @Prop({ default: 'auto-fill' }) mode!: string;
  @Prop({ default: '30px' }) gap!: string;

  get gridMode(): string {
    return `--tc-grid-mode:${this.mode};`;
  }

  get gridGap(): string {
    return `--tc-grid-gap:${this.transformNumber(this.gap)};`;
  }

  get gridWidth(): string {
    return `--tc-grid-width:${this.transformNumber(this.width)};`;
  }

  public transformNumber(number: string | number): string {
    if (isNaN(+number)) return `${number}`;
    return number + 'px';
  }
}
</script>

<style lang="scss" scoped>
.tc-grid {
  display: grid;
  grid-gap: var(--tc-grid-gap);
  grid-template-columns: repeat(
    var(--tc-grid-mode),
    minmax(var(--tc-grid-width), 1fr)
  );
}
</style>
