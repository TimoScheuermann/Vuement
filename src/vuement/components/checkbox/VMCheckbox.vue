<template>
  <label
    class="vm-checkbox"
    :style="{
      '--vm-color': vmColor,
      '--vm-primary': vmChecked,
      '--vm-container': vmBackground,
    }"
  >
    <input type="checkbox" v-model="innerVal" />
    <div class="vm-checkbox__background" />
    <div class="vm-checkbox--checkbox">
      <svg viewBox="0 0 100 100">
        <path
          stroke="#fff"
          d="M1550,970.667l14.167,14.167L1601,948l-36.833,36.833Z"
          transform="translate(-1525 -915.917)"
        />
      </svg>
    </div>
    <div class="vm-checkbox--title" v-if="title">{{ title }}</div>
  </label>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';

@Component
export default class VMCheckbox extends Mixins(VMCProp, VMBgProp) {
  @Prop() title!: string;
  @Prop() value!: boolean;
  @Prop() checked!: string;

  public innerVal = !!this.value;

  get vmChecked(): string | null {
    if (!this.checked) return null;
    return this.getColor(this.checked);
  }

  @Watch('value', { immediate: true })
  valueChanged(): void {
    this.innerVal = !!this.value;
  }

  @Watch('innerVal', { immediate: true })
  innerValChanged(): void {
    this.$emit('input', this.innerVal);
  }
}
</script>

<style lang="scss" scoped>
.vm-checkbox {
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;

  margin: 2.5px;

  cursor: pointer;
  height: 19.33px;
  padding: 5px;
  border-radius: $border-radius;

  color: rgba(var(--vm-color), 1);

  transition: 0.2s ease-in-out;
  &:active {
    filter: brightness(105%);
    transform: scale(0.95);
  }

  input {
    display: none;
  }

  input:checked ~ &--checkbox {
    background: rgba(var(--vm-primary), 1);
    transform: scale(1.15);
    box-shadow: 1px 2px 4px rgba(#111, 0.1);

    transition: background 0.2s ease-in-out, transform 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;

    path {
      stroke: {
        dasharray: 172px;
        dashoffset: 0px;
      }
      transition-delay: 0.2s;
    }
  }

  &__background {
    position: absolute;
    border-radius: inherit;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(var(--vm-container), 1);
  }

  &--title {
    position: inherit;
    margin-left: 5px;
    padding: 0 2.5px;
    user-select: none;
  }

  &--checkbox {
    position: inherit;
    height: 19.33px;
    width: 19.33px;
    border-radius: #{$border-radius / 1.5};
    background: rgba(var(--vm-background), 1);

    transition: background 0.3s ease-in-out 0.3s, transform 0.4s ease-in-out,
      box-shadow 0.4s ease-in-out;

    svg {
      path {
        stroke: {
          dasharray: 172px;
          dashoffset: 172px;
          linecap: round;
          linejoin: round;
          width: 10;
        }
        transition: all 0.4s ease-in-out;
      }
    }
  }
}
</style>
