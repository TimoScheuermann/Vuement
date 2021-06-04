<template>
  <label
    class="vm-textarea"
    :frosted="frosted"
    :style="{ '--vm-color': vmColor, '--vm-container': vmBackground }"
  >
    <div class="vm-textarea--title" v-if="title">{{ title }}</div>
    <div class="vm-textarea--textarea">
      <div class="vm-textarea--textarea__background" />
      <textarea
        :placeholder="placeholder"
        v-model="innerVal"
        :autofocus="autofocus"
        :cols="cols"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :rows="rows"
        :wrap="wrap"
      />
    </div>
  </label>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';

@Component
export default class VMTextarea extends Mixins(VMCProp, VMBgProp) {
  @Prop() frosted!: boolean;
  @Prop() title!: string;
  @Prop({ default: 'Enter text...' }) placeholder!: string;
  @Prop() value!: string;

  @Prop() autofocus!: boolean;
  @Prop() cols!: number;
  @Prop() disabled!: boolean;
  @Prop() readonly!: boolean;
  @Prop() required!: boolean;
  @Prop({ default: 3 }) rows!: string;
  @Prop() wrap!: string;

  public innerVal = this.value || '';

  @Watch('value', { immediate: true })
  valueChanged(): void {
    this.innerVal = this.value || '';
  }

  @Watch('innerVal', { immediate: true })
  innerValChanged(): void {
    this.$emit('input', this.innerVal);
  }
}
</script>

<style lang="scss" scoped>
.vm-textarea {
  display: inline-block;
  margin: 2.5px;

  color: rgba(var(--vm-color), 1);

  &[frosted] {
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      .vm-textarea--textarea {
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

  &--textarea {
    position: relative;
    display: flex;
    flex-wrap: nowrap;

    border-radius: $border-radius;
    overflow: hidden;

    &__background {
      position: absolute;
      border-radius: inherit;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(var(--vm-container), 1);
    }

    textarea {
      @include vm-scrollbar();
      position: relative;
      margin: 0;
      padding: 10px;
      display: flex;
      flex: 1 1 0px;
      width: 100%;

      border: none;
      background: none;
      outline: none;

      font: inherit;
      font-size: inherit;
      color: inherit;

      resize: none;

      &::placeholder {
        font: inherit;
        color: inherit;
        opacity: 0.6;
      }
    }
  }
}
</style>
