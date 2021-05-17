<template>
  <label class="tc-radio" v-if="name" :disabled="disabled" :style="tcColor">
    <input type="radio" :name="name" :disabled="disabled" />
    <div class="tc-radio--dot" />
    <div class="tc-radio--title" v-if="title">{{ title }}</div>
  </label>
</template>

<script lang="ts">
import { getColor } from '@/tcComponents/util';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCRadio extends Vue {
  @Prop({ default: 'Radio title' }) title!: string;
  @Prop({ required: true }) name!: string;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: 'primary' }) color!: string;

  get tcColor(): string {
    return `--tc-color:${getColor(this, this.color)};`;
  }
}
</script>

<style lang="scss" scoped>
.tc-radio {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 0px;
  width: fit-content;

  &:not([disabled]) {
    cursor: pointer;

    &:active .tc-radio--dot {
      transform: scale(0.9);
    }
  }

  input {
    display: none;
  }

  $scale: 13px;
  input:checked ~ .tc-radio--dot {
    box-shadow: 1px 2px 4px rgba(#111, 0.1);
    border-color: var(--tc-color);
    border-width: #{$scale / 2 - 2.5px};
  }

  &--dot {
    border: 2px solid var(--tc-container);
    height: $scale;
    width: $scale;
    border-radius: $scale;
    background: var(--tc-paragraph);
    transition: 0.2s ease-in-out;
    box-sizing: border-box;
  }

  &--title {
    margin-left: 5px;
    user-select: none;
  }
}
</style>
