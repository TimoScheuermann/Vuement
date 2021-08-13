<template>
  <div class="vm-divider" :style="{ '--vm-border': vmColor }">
    <div class="vm-divider__bar" v-if="position !== 'leading'" />
    <div class="vm-divider__content" v-if="$slots.default"><slot /></div>
    <div class="vm-divider__bar" v-if="position !== 'trailing'" />
  </div>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component<VMDivider>({
  name: 'vmDivider',
})
export default class VMDivider extends Mixins(VMCProp) {
  @Prop({ default: 'center' }) position!: string;
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
    background: rgba(var(--vm-border), 1);
  }

  &__content ~ &__bar {
    margin-left: 5px;
  }
  &__bar ~ &__content {
    margin-left: 5px;
  }
}
</style>
