<template>
  <span
    :is="compTag"
    @click="click"
    :href="href ? href : undefined"
    :to="to || routeName ? to || { name: routeName } : undefined"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import VMLinkMixin from './VMLink.mixin';

@Component
export default class VMClickable extends Mixins(VMLinkMixin) {
  @Prop() fallback!: 'div';

  get canBeRouterLink(): boolean {
    if (this.disabled) return false;
    if (!!this.to || !!this.routeName) return true;
    return false;
  }

  get compTag(): string {
    if (this.canBeRouterLink) return 'router-link';
    if (this.href && this.href.length > 0) return 'a';
    return this.fallback || 'div';
  }

  public click(e: MouseEvent): void {
    this.$emit('click', e);
  }
}
</script>
