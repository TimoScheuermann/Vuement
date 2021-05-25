<template>
  <label class="vm-switch" :style="switchColor" @click.stop>
    <input type="checkbox" v-model="checked" />
    <div class="vm-switch__container">
      <div class="vm-switch__container--ball" />
    </div>
  </label>
</template>

<script lang="ts">
import { getColor } from '@/vuement/util';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class VMSwitch extends Vue {
  @Prop({ default: 'primary' }) color!: string;
  @Prop({ default: false }) value!: boolean;

  public checked = !!this.value;

  get switchColor(): string {
    return `--vm-switch:${getColor(this.color)}`;
  }

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
    background: var(--vm-switch);
    .vm-switch__container--ball {
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

    background: var(--vm-container);
    transition: 0.2s ease-in;

    &--ball {
      position: absolute;
      background: #fff;
      height: #{$ballSize}px;
      width: #{$ballSize}px;
      border-radius: #{$ballSize}px;

      top: 50%;
      transition: 0.2s cubic-bezier(0.73, 1.64, 0.35, 0.65);
      transform: translate(calc(50% - #{$ballSize / 2 - 3}px), -50%);
    }
  }
}
</style>
