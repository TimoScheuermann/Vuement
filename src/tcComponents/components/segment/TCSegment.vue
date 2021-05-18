<template>
  <div class="tc-segment">
    <div class="tc-segment__background" />
    <div class="tc-segment__box">
      <div :style="boxStyle" />
    </div>

    <div class="tc-segment__items">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class TCSegment extends Vue {
  @Prop({ default: 0 }) value!: number;

  public segment = 0;
  public segments = 0;

  mounted(): void {
    this.valueChanged();
    this.updateAmount();
    this.setSegment(this.segment);
    this.$on('itemChange', this.updateAmount);
    this.$on('setSegment', this.setSegment);
  }

  @Watch('value')
  valueChanged(): void {
    if (this.value && !isNaN(+this.value)) {
      const num = +this.value;
      if (num >= 0 && num < this.segments) {
        this.segment = num;
      }
    }
  }

  @Watch('segment')
  segmentChanged(): void {
    this.$emit('input', this.segment);
    this.setSegment(this.segment);
  }

  get boxStyle(): string {
    const width = `width: calc(100% / ${this.segments});`;
    const left = `left: calc(100% / ${this.segments * 2} * ${
      this.segment * 2
    });`;
    return left + width;
  }

  public updateAmount(): void {
    this.$nextTick(() => {
      this.segments = this.$children.length;
    });
  }

  public setSegment(index: number): void {
    this.segment = index;
    this.$children.forEach((c, i) => {
      c.$emit('state', i === index);
    });
  }
}
</script>

<style lang="scss" scoped>
.tc-segment {
  position: relative;
  display: inline-block;
  width: calc(100% - 15px);
  margin: 2.5px;
  border-radius: $border-radius;
  min-height: 24.33px;
  padding: 5px;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: var(--tc-container);
  }

  &__box {
    position: absolute;
    width: calc(100% - 10px);
    height: calc(100% - 10px);

    div {
      position: absolute;
      background: var(--tc-background);
      top: 50%;
      transform: translateY(-50%);
      height: 100%;
      border-radius: #{$border-radius / 1.5};
      transition: all 0.3s cubic-bezier(0.63, 1.65, 0.42, 0.75);
    }
  }

  &__items {
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    align-items: center;
    flex: 1 1 0px;
  }
}
</style>
