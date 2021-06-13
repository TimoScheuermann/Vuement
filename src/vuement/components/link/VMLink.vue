<template>
  <router-link
    class="vm-link"
    v-if="to || routeName || href"
    @click.stop="clicked"
    :to="to || { name: routeName }"
    :href="href"
    :style="{ '--vm-primary': vmColor }"
  >
    <slot />
  </router-link>
  <span
    v-else
    class="vm-link"
    @click.stop="clicked"
    :style="{ '--vm-primary': vmColor }"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Mixins } from 'vue-property-decorator';

@Component
export default class VMLink extends Mixins(VMLinkMixin, VMCProp) {}
</script>

<style lang="scss" scoped>
.vm-link {
  color: rgba(var(--vm-primary), 1);
  text-decoration: none;
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
