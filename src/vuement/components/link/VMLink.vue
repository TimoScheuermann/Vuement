<template>
  <VMClickable
    class="vm-link"
    @click.stop="clicked"
    fallback="span"
    :disabled="disabled"
    :to="to"
    :href="href"
    :routeName="routeName"
    :style="{ '--vm-primary': vmColor }"
  >
    <slot />
  </VMClickable>
</template>

<script lang="ts">
import VMClickable from '@/vuement/mixins/VMClickable.vue';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component({
  components: {
    VMClickable,
  },
})
export default class VMLink extends Mixins(VMLinkMixin, VMCProp) {}
</script>

<style lang="scss" scoped>
.vm-link {
  @include vm-clickable();

  color: rgba(var(--vm-primary), 1);
  cursor: pointer;
  position: relative;
  z-index: 4;

  &::before {
    content: '';
    z-index: 5;
    position: absolute;
    bottom: 0;
    height: 1px;
    border-radius: 1px;
    left: -2.5px;
    width: 0%;
    transition: 0.2s ease-in-out;
    background: currentColor;
  }

  &:hover::before {
    width: calc(100% + 5px);
  }
}
</style>
