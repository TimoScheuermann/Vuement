<template>
  <div class="vm-progress">
    <div
      class="vm-progress--bar"
      v-if="type === 'bar'"
      :style="barStyle"
      :title="title"
    >
      <div
        class="vm-progress--bar__bar"
        :style="'background:' + vmColor + ';'"
      />
    </div>

    <svg
      v-else
      class="vm-progress--ring"
      :title="title"
      :width="rS"
      :height="rS"
    >
      <circle
        :style="{ stroke: background, 'stroke-width': rW }"
        :cx="rS / 2"
        :cy="rS / 2"
        :r="radius"
      />
      <circle
        :style="{
          stroke: vmColor,
          'stroke-width': rW - 4,
          'stroke-dasharray': dasharray,
          'stroke-dashoffset': dashoffset,
        }"
        :r="radius"
        :cx="rS / 2"
        :cy="rS / 2"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { convertStyles } from '@/vuement/dev/util';
import VMColorMixin from '@/vuement/mixins/VMColor.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component
export default class VMProgress extends Mixins(VMColorMixin) {
  @Prop({ default: 'bar' }) type!: string;
  @Prop({ default: 0 }) progress!: number;
  @Prop({ default: 'primary' }) color!: string;
  @Prop() background!: string;
  @Prop({ default: '6px' }) barHeight!: string;
  @Prop({ default: 100 }) ringSize!: number;
  @Prop({ default: 6 }) ringWidth!: number;

  get rS(): number {
    return this.convertNumb(this.ringSize, 100) + 4;
  }
  get rW(): number {
    return this.convertNumb(this.ringWidth, 6) + 4;
  }

  get vmBackground(): string | null {
    if (!this.background) return null;
    return `background: ${this.getColor(this.background)};`;
  }

  get vmColor(): string {
    return this.getColor(this.color);
  }

  get title(): string {
    const p = Math.round(this.progress * 10000) / 100;
    return `${p}%`;
  }

  get barStyle(): string | null {
    return convertStyles([
      `--vm-progress-p: ${this.progress * 100}%;`,
      `height: ${this.barHeight ? this.barHeight : '5px'};`,
      this.vmBackground,
    ]);
  }

  private convertNumb(numb: string | number, fallback: number): number {
    if (!numb || isNaN(+numb)) return fallback;
    return +numb;
  }

  get radius(): number {
    return (this.rS - this.rW) / 2;
  }

  get circumference(): number {
    return this.radius * 2 * Math.PI;
  }

  get dashoffset(): number {
    return (
      this.circumference -
      this.convertNumb(this.progress, 0) * this.circumference
    );
  }

  get dasharray(): string {
    return `${this.circumference} ${this.circumference}`;
  }
}
</script>

<style lang="scss" scoped>
.vm-progress {
  display: flex;
  flex: 1 1 0px;

  &--bar {
    display: flex;
    flex: 1 1 0px;

    max-width: calc(100% - 9px);

    margin: 2.5px;
    padding: 2px;
    border-radius: 100vw;
    background: var(--vm-container);

    &__bar {
      border-radius: inherit;
      width: var(--vm-progress-p);
      transition: 0.2s ease-in-out;
    }
  }

  &--ring {
    height: auto;
    transform: rotate(-90deg);

    circle {
      fill: none;
      stroke: var(--vm-container);
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: 0.2s ease-in-out;
    }
  }
}
</style>
