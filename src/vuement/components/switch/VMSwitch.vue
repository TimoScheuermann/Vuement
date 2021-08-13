<template>
  <label
    class="vm-switch"
    @click.stop
    :style="{ '--vm-primary': vmColor, '--vm-container': vmBackground }"
  >
    <input type="checkbox" v-model="checked" />
    <div class="vm-switch__container">
      <span checked v-if="$slots.checked">
        <slot name="checked" />
      </span>

      <div />

      <span unchecked v-if="$slots.unchecked">
        <slot name="unchecked" />
      </span>
    </div>
  </label>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';

@Component<VMSwitch>({
  name: 'vmSwitch',
})
export default class VMSwitch extends Mixins(VMCProp, VMBgProp) {
  @Prop({ default: false }) value!: boolean;

  public checked = !!this.value;

  @Watch('value', { immediate: true })
  public valueChanged(): void {
    this.checked = !!this.value;
  }

  @Watch('checked', { immediate: true })
  public checkedChanged(): void {
    this.$emit('input', this.checked);
  }
}
</script>

<style lang="scss" scoped>
.vm-switch {
  margin: 2.5px;
  cursor: pointer;
  display: inline-block;

  input {
    display: none;
  }

  $ballSize: 21;
  input:checked + &__container {
    background: rgba(var(--vm-primary), 1);
    & > div {
      transform: translate(calc(50% + #{$ballSize / 2 + 3}px), -50%);
    }
  }

  &:active .vm-switch__container {
    filter: brightness(105%);
  }

  &__container {
    position: relative;
    width: #{$ballSize * 2 + 6}px;
    height: #{$ballSize + 6}px;
    border-radius: #{$ballSize + 3}px;

    background: rgba(var(--vm-container), 1);
    transition: 0.2s ease-in;

    & > div {
      position: absolute;
      z-index: 5;
      background: #fff;
      height: #{$ballSize}px;
      width: #{$ballSize}px;
      border-radius: #{$ballSize}px;

      top: 50%;
      transition: 0.2s cubic-bezier(0.73, 1.64, 0.35, 0.65);
      transform: translate(calc(50% - #{$ballSize / 2 - 3}px), -50%);
    }

    & > span {
      z-index: 4;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: grid;
      place-content: center;

      height: #{$ballSize}px;
      width: #{$ballSize}px;
      border-radius: #{$ballSize}px;
      font-size: 13px;
      opacity: 0.75;

      &[checked] {
        color: #fff;
        left: 3px;
      }
      &[unchecked] {
        color: rgba(var(--vm-color), 1);
        right: 3px;
      }
    }
  }
}
</style>
