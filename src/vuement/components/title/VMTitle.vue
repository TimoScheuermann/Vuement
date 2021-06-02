<template>
  <div
    class="vm-title"
    :style="{ '--vm-color': vmColor, '--vm-color-secondary': vmColorSecondary }"
  >
    <div class="vm-title--subtitle" v-if="subtitle">{{ subtitle }}</div>
    <div class="vm-title--title" v-if="title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component
export default class VMTitle extends Mixins(VMCProp) {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() colorSecondary!: string;

  get vmColorSecondary(): string | null {
    return this.colorSecondary ? this.getColor(this.colorSecondary) : null;
  }
}
</script>

<style lang="scss" scoped>
.vm-title {
  &--title {
    font-size: 25px;
    font-weight: bold;
    overflow-wrap: break-word;
    color: rgba(var(--vm-color), 1);
  }
  &--subtitle {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: rgba(var(--vm-color-secondary), 1);
  }
}
</style>
