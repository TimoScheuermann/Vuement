<template>
  <label class="tc-input" :frosted="frosted">
    <div class="tc-input--title" v-if="title">{{ title }}</div>
    <div class="tc-input--input" :style="outlineStyle">
      <div class="tc-input--input__background" />
      <div class="tc-input--input--icon" v-if="icon">
        <i :class="icon" />
      </div>
      <input :type="type" :placeholder="placeholder" />
    </div>
  </label>
</template>

<script lang="ts">
import { getColor } from '@/tcComponents/util';
import { Vue, Component, Prop } from 'vue-property-decorator';

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

  get outlineStyle(): string | null {
    if (!this.outline) return null;
    return `--tc-outline:${getColor(this, this.outline)};`;
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
    }
  }
}
</style>
