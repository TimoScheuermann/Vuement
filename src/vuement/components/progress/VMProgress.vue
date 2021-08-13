<template>
  <div
    class="vm-progress"
    :style="{ '--vm-primary': vmColor, '--vm-container': vmBackground }"
  >
    <div
      class="vm-progress--bar"
      v-if="type === 'bar'"
      :style="{ height: barHeight, '--vm-progress-p': progress * 100 + '%' }"
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
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component<VMProgress>({
  name: 'vmProgress',
})
export default class VMProgress extends Mixins(VMCProp, VMBgProp) {
  @Prop({ default: 'bar' }) type!: string;
  @Prop({ default: 0 }) progress!: number;
  @Prop() barHeight!: string;
  @Prop({ default: 100 }) ringSize!: number;
  @Prop({ default: 6 }) ringWidth!: number;

  get rS(): number {
    return this.convertNumb(this.ringSize, 100) + 4;
  }
  get rW(): number {
    return this.convertNumb(this.ringWidth, 6) + 4;
  }

  get title(): string {
    const p = Math.round(this.progress * 10000) / 100;
    return `${p}%`;
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
    height: 6px;

    margin: 2.5px;
    padding: 2px;
    border-radius: 100vw;
    background: rgba(var(--vm-container), 1);

    &__bar {
      border-radius: inherit;
      width: var(--vm-progress-p);
      transition: 0.2s ease-in-out;
      background: rgba(var(--vm-primary), 1);
    }
  }

  &--ring {
    height: auto;
    transform: rotate(-90deg);

    circle {
      fill: none;
      stroke: rgba(var(--vm-container), 1);
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: 0.2s ease-in-out;

      &:last-child {
        stroke: rgba(var(--vm-primary), 1);
      }
    }
  }
}
</style>
