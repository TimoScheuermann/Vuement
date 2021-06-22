<template>
  <div class="vm-container">
    <slot />
  </div>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class VMContainer extends Mixins(VMCProp, VMBgProp) {
  @Prop({ default: 'container' }) background!: string;
}
</script>

<style lang="scss" scoped>
.vm-container {
  background: rgba(var(--vm-container), 1)
    linear-gradient(to bottom right, rgba(var(--vm-color), 0.1), transparent);

  border-radius: $border-radius;
  margin: 2.5px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  min-height: 20px;
  min-width: 20px;
}
</style>
