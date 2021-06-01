<template>
  <div class="vm-divider" :style="vmColor">
    <div class="vm-divider__bar" v-if="position !== 'leading'" />
    <div class="vm-divider__content" v-if="$slots.default"><slot /></div>
    <div class="vm-divider__bar" v-if="position !== 'trailing'" />
  </div>
</template>

<script lang="ts">
import VMColorMixin from '@/vuement/mixins/VMColor.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class VMDivider extends Mixins(VMColorMixin) {
  @Prop() color!: string;
  @Prop({ default: 'center' }) position!: string;

  get vmColor(): string | null {
    if (!this.color) return null;
    return `--vm-color: ${this.getColor(this.color)}`;
  }
}
</script>

<style lang="scss" scoped>
.vm-divider {
  display: flex;
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;
  margin: 2.5px 0;

  &__bar {
    height: 1px;
    flex-grow: 1;
    background: var(--vm-color);
    opacity: 0.5;
  }

  &__content ~ &__bar {
    margin-left: 5px;
  }
  &__bar ~ &__content {
    margin-left: 5px;
  }
}
</style>
