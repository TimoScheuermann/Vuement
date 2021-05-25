<template>
  <label class="vm-input" :frosted="frosted">
    <div
      class="vm-input--title"
      :floating="floatingTitle"
      :moveUp="!!this.innerVal && this.innerVal.length > 0"
      :icon="icon"
      v-if="title"
    >
      {{ title }}
    </div>
    <div class="vm-input--input" :style="outlineStyle">
      <div class="vm-input--input__background" />
      <div class="vm-input--input--icon" v-if="icon">
        <i :class="icon" />
      </div>
      <input
        :type="type"
        v-model="innerVal"
        :placeholder="floatingTitle ? '' : placeholder"
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
import { getColor } from '@/vuement/util';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class VMInput extends Vue {
  @Prop() placeholder!: string;
  @Prop() value!: string;
  @Prop() background!: string;
  @Prop() color!: string;
  @Prop({ default: 'text' }) type!: string;
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() frosted!: boolean;
  @Prop() outline!: string;
  @Prop({ default: false }) floatingTitle!: boolean;

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
    return `--vm-outline:${getColor(this.outline)};`;
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
.vm-input {
  display: inline-block;
  margin: 2.5px;
  max-width: calc(100% - 5px);

  color: var(--vm-color);
  position: relative;

  &[frosted] {
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      .vm-input--input {
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

    &[floating] {
      position: absolute;
      top: 50%;
      left: 5px;
      z-index: 10;
      transform: translateY(-50%);
      font-weight: normal;
      opacity: 0.6;
      transition: all 0.2s ease-in-out;
      user-select: none;

      &[icon] {
        margin-left: 26px;
      }

      &[moveUp] {
        font-weight: 550;
        user-select: text;
        opacity: 1;
        top: -10px;
        left: 0;
        margin-left: 0;
      }
    }
  }

  &--input {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    width: calc(100% - 10px);
    padding: 0 5px;
    border-radius: $border-radius;

    border-bottom: 1.5px solid var(--vm-outline);
    box-sizing: border-box;

    &__background {
      position: absolute;
      border-radius: inherit;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--vm-container);
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
