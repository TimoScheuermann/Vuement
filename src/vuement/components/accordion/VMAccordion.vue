<template>
  <ul
    class="vm-accordion"
    :style="{ '--vm-color': vmColor, '--vm-border': vmBorder }"
  >
    <slot />
  </ul>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component<VMAccordion>({
  name: 'vmAccordion',
})
export default class VMAccordion extends Mixins(VMCProp) {
  @Prop() border!: string;

  get vmBorder(): string | null {
    return this.border ? this.getColor(this.border) : null;
  }
}
</script>

<style lang="scss" scoped>
.vm-accordion {
  margin: 0;
  padding: 0;
  color: rgba(var(--vm-color), 1);
  width: 100%;
}
</style>
