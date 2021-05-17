<template>
  <label class="tc-textarea" :frosted="frosted">
    <div class="tc-textarea--title" v-if="title">{{ title }}</div>
    <div class="tc-textarea--textarea">
      <div class="tc-textarea--textarea__background" />
      <textarea :placeholder="placeholder" />
    </div>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCTextarea extends Vue {
  @Prop() frosted!: boolean;
  @Prop() title!: string;
  @Prop({ default: 'Enter text...' }) placeholder!: string;
}
</script>

<style lang="scss" scoped>
.tc-textarea {
  display: inline-block;
  margin: 2.5px;

  color: var(--tc-color);

  &[frosted] {
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      .tc-textarea--textarea {
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
    width: 100%;
    padding: 0 5px;
    border-radius: $border-radius;

    &__background {
      position: absolute;
      border-radius: inherit;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--tc-container);
    }

    textarea {
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
