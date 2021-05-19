<template>
  <label class="tc-checkbox">
    <input type="checkbox" v-model="checked" />
    <div class="tc-checkbox__background" />
    <div class="tc-checkbox--checkbox" :style="tcChecked">
      <svg viewBox="0 0 100 100">
        <path
          stroke="#fff"
          d="M1550,970.667l14.167,14.167L1601,948l-36.833,36.833Z"
          transform="translate(-1525 -915.917)"
        />
      </svg>
    </div>
    <div class="tc-checkbox--title" v-if="title">{{ title }}</div>
  </label>
</template>

<script lang="ts">
import { getColor } from '@/tcComponents/util';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class TCCheckbox extends Vue {
  @Prop({ default: 'Title' }) title!: string;
  @Prop({ default: 'primary' }) color!: string;
  @Prop() value!: boolean;

  public checked = !!this.value;

  get tcChecked(): string {
    return `--tc-checked:${getColor(this, this.color)}`;
  }

  @Watch('value', { immediate: true })
  valueChanged(): void {
    this.checked = !!this.value;
  }

  @Watch('checked', { immediate: true })
  checkedChanged(): void {
    this.$emit('input', this.checked);
  }
}
</script>

<style lang="scss" scoped>
.tc-checkbox {
  position: relative;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;

  margin: 2.5px;

  cursor: pointer;
  height: 19.33px;
  padding: 5px;
  border-radius: $border-radius;

  color: var(--tc-color);

  transition: 0.2s ease-in-out;
  &:active {
    filter: brightness(105%);
    transform: scale(0.95);
  }

  input {
    display: none;
  }

  input:checked ~ &--checkbox {
    background: var(--tc-checked);
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
    background: var(--tc-container);
  }

  &--title {
    position: inherit;
    margin-left: 5px;
    user-select: none;
  }

  &--checkbox {
    position: inherit;
    height: 19.33px;
    width: 19.33px;
    border-radius: #{$border-radius / 1.5};
    background: var(--tc-background);

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
