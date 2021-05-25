<template>
  <div class="vm-quote" :style="vmColor">
    <div class="vm-quote__background" :style="{ background: background }" />
    <div class="vm-quote__bar" />

    <div class="vm-quote--title" v-if="title">{{ title }}</div>
    <div class="vm-quote--content"><slot /></div>
  </div>
</template>

<script lang="ts">
import { getColor } from '@/vuement/util';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class VMQuote extends Vue {
  @Prop() title!: string;
  @Prop({ default: 'primary' }) color!: string;
  @Prop() background!: string;

  get vmColor(): string {
    return `--vm-quote-c: ${getColor(this.color)};`;
  }
}
</script>

<style lang="scss" scoped>
.vm-quote {
  position: relative;
  border-radius: $border-radius;
  padding: 10px;
  padding-left: #{$border-radius + 10px};

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    background: var(--vm-container);
  }

  &__bar {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: $border-radius;
    background: var(--vm-quote-c);
    border-radius: inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &--title,
  &--content {
    position: relative;
  }

  &--title {
    margin-bottom: 5px;
    padding-bottom: 5px;
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;
      background: currentColor;
      height: 1px;
      width: 100%;
      right: 0;
      bottom: 0;
      opacity: 0.25;
    }

    &::after {
      content: '\ea75\ea75';
      font-family: 'Timos-Icons';
      position: absolute;
      letter-spacing: -6px;
      right: 6px;
      top: 0;
      font-weight: 900;
      color: var(--vm-quote-c);
    }
  }
}
</style>
