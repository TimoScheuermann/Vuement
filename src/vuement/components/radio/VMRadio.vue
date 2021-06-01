<template>
  <label class="vm-radio" v-if="name" :disabled="disabled" :style="vmColor">
    <input type="radio" :name="name" :disabled="disabled" v-model="innerVal" />
    <div class="vm-radio--dot" />
    <div class="vm-radio--title" v-if="title">{{ title }}</div>
  </label>
</template>

<script lang="ts">
import VMColorMixin from '@/vuement/mixins/VMColor.mixin';
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';

@Component
export default class VMRadio extends Mixins(VMColorMixin) {
  @Prop() title!: string;
  @Prop({ required: true }) name!: string;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: 'primary' }) color!: string;
  @Prop() value!: string;

  public innerVal = this.value || null;

  get vmColor(): string {
    return `--vm-color:${this.getColor(this.color)};`;
  }

  @Watch('value', { immediate: true })
  valueChanged(): void {
    this.innerVal = this.value || null;
  }

  @Watch('innerVal', { immediate: true })
  innerValChanged(): void {
    this.$emit('input', this.innerVal);
  }
}
</script>

<style lang="scss" scoped>
.vm-radio {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 0px;
  width: fit-content;

  &:not([disabled]) {
    cursor: pointer;

    &:active .vm-radio--dot {
      transform: scale(0.9);
    }
  }

  input {
    display: none;
  }

  $scale: 13px;
  input:checked ~ .vm-radio--dot {
    box-shadow: 1px 2px 4px rgba(#111, 0.1);
    border-color: var(--vm-color);
    border-width: #{$scale / 2 - 2.5px};
  }

  &--dot {
    border: 2px solid var(--vm-container);
    height: $scale;
    width: $scale;
    border-radius: $scale;
    background: var(--vm-paragraph);
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
  }

  &--title {
    margin-left: 5px;
    user-select: none;
  }
}
</style>
