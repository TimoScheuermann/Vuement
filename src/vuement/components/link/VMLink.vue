<template>
  <router-link
    v-if="to || routeName || href"
    :to="to || { name: routeName }"
    :href="href"
    :style="vmColor"
    @click.stop="clicked"
    class="vm-link"
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
import VMColorMixin from '@/vuement/mixins/VMColor.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class VMLink extends Mixins(VMLinkMixin, VMColorMixin) {
  @Prop({ default: 'primary' }) color!: string;

  get vmColor(): string {
    return `--vm-color: ${this.getColor(this.color)}`;
  }
}
</script>

<style lang="scss" scoped>
.vm-link {
  color: var(--vm-color);
  text-decoration: none;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
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
