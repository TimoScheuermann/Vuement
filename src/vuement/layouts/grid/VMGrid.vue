<template>
  <div class="tl-grid" :style="gridMode + gridGap + gridWidth">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TLGrid extends Vue {
  @Prop({ default: '200px' }) width!: string;
  @Prop({ default: 'auto-fill' }) mode!: string;
  @Prop({ default: '30px' }) gap!: string;

  get gridMode(): string {
    return `--tl-grid-mode:${this.mode};`;
  }

  get gridGap(): string {
    return `--tl-grid-gap:${this.transformNumber(this.gap)};`;
  }

  get gridWidth(): string {
    return `--tl-grid-width:${this.transformNumber(this.width)};`;
  }

  public transformNumber(number: string | number): string {
    if (isNaN(+number)) return `${number}`;
    return number + 'px';
  }
}
</script>

<style lang="scss" scoped>
.tl-grid {
  display: grid;
  grid-gap: var(--tl-grid-gap);
  grid-template-columns: repeat(
    var(--tl-grid-mode),
    minmax(var(--tl-grid-width), 1fr)
  );
}
</style>
