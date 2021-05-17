<template>
  <label class="tc-checkbox">
    <input type="checkbox" v-model="checked" />
    <div class="tc-checkbox__background" />
    <div class="tc-checkbox--checkbox">
      <svg viewBox="0 0 100 100">
        <path
          stroke="#08f"
          d="M1550,970.667l14.167,14.167L1601,948l-36.833,36.833Z"
          transform="translate(-1525 -915.917)"
        />
      </svg>
    </div>
    <div class="tc-checkbox--title" v-if="title">{{ title }}</div>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCCheckbox extends Vue {
  @Prop() title!: string;
  @Prop({ default: 'primary' }) color!: string;

  public checked = false;
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

  input {
    display: none;
  }

  input:checked ~ &--checkbox {
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
