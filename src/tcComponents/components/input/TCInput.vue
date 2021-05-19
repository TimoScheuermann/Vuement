<template>
  <label class="tc-input" :frosted="frosted">
    <div class="tc-input--title" v-if="title">{{ title }}</div>
    <div class="tc-input--input" :style="outlineStyle">
      <div class="tc-input--input__background" />
      <div class="tc-input--input--icon" v-if="icon">
        <i :class="icon" />
      </div>
      <input
        :type="type"
        :value="type && type !== 'file' ? innerVal : null"
        :placeholder="placeholder"
        :accept="accept"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :disabled="disabled"
        :max="max"
        :maxlength="maxlength"
        :min="min"
        :minlength="minlength"
        :pattern="pattern"
        :readonly="readonly"
        :required="required"
        :step="step"
        :inputMode="inputMode"
        @change="change"
      />
    </div>
  </label>
</template>

<script lang="ts">
import { getColor } from '@/tcComponents/util';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class TCInput extends Vue {
  @Prop() placeholder!: string;
  @Prop() value!: string;
  @Prop() background!: string;
  @Prop() color!: string;
  @Prop({ default: 'text' }) type!: string;
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() frosted!: boolean;
  @Prop() outline!: string;

  @Prop() accept!: string;
  @Prop() autocomplete!: 'on' | 'off';
  @Prop() autofocus!: boolean;
  @Prop() disabled!: boolean;
  @Prop() max!: number | string;
  @Prop() maxlength!: number;
  @Prop() min!: number | string;
  @Prop() minlength!: number;
  @Prop() pattern!: string;
  @Prop() readonly!: boolean;
  @Prop() required!: boolean;
  @Prop({ default: 1 }) step!: number;

  public innerVal = this.value || '';

  get outlineStyle(): string | null {
    if (!this.outline) return null;
    return `--tc-outline:${getColor(this, this.outline)};`;
  }

  get inputMode(): string {
    if (!this.type) return '';
    if (this.type === 'tel') return 'tel';
    if (this.type === 'search') return 'search';
    if (this.type === 'email') return 'email';
    if (this.type === 'url') return 'url';
    if (this.type === 'number') {
      if (('' + this.step).includes('.')) {
        return 'decimal';
      }
      return 'numeric';
    }
    return '';
  }

  @Watch('value', { immediate: true })
  valueChanged(): void {
    this.innerVal = this.value || '';
  }

  @Watch('innerVal', { immediate: true })
  innerValChanged(): void {
    this.$emit('input', this.innerVal);
  }

  public change(e: Event): void {
    this.$emit('change', e);
  }
}
</script>

<style lang="scss" scoped>
.tc-input {
  display: inline-block;
  margin: 2.5px;
  max-width: calc(100% - 5px);

  color: var(--tc-color);

  &[frosted] {
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      .tc-input--input {
        &__background {
          opacity: 0.5;
        }
        backdrop-filter: saturate(180%) blur(20px);
      }
    }
  }

  &--title {
    font-weight: 550;
    margin-left: 5px;
  }

  &--input {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    width: calc(100% - 10px);
    padding: 0 5px;
    border-radius: $border-radius;

    border-bottom: 1.5px solid var(--tc-outline);
    box-sizing: border-box;

    &__background {
      position: absolute;
      border-radius: inherit;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--tc-container);
    }
    &--icon {
      position: relative;
      display: grid;
      place-content: center;
      margin-right: 2.5px;
      padding-right: 2.5px;
      &::after {
        content: '';
        position: absolute;
        width: 1px;
        background: currentColor;
        opacity: 0.5;
        right: -2.5px;
        height: 60%;
        top: 20%;
        border-radius: 2px;
      }
    }

    input {
      position: relative;
      margin: 0;
      padding: 5px;
      display: flex;
      flex: 1 1 0px;

      border: none;
      background: none;
      outline: none;

      font: inherit;
      font-size: inherit;
      color: inherit;

      &::placeholder {
        font: inherit;
        color: inherit;
        opacity: 0.6;
      }

      -webkit-appearance: none;
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      &[type='number'] {
        text-align: center;
        -moz-appearance: textfield;
      }

      &[type='file'] {
        max-width: 1px;
        opacity: 0;
      }

      &::-webkit-color-swatch {
        border: none;
        border-radius: 4px;
        margin-right: -5px;
      }

      &::-webkit-color-swatch-wrapper {
        padding: 0;
      }
    }
  }
}
</style>
