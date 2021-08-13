<template>
  <component
    :is="compTag"
    @click="click"
    :href="href && !disabled ? href : undefined"
    :to="(to || routeName) && !disabled ? to || { name: routeName } : undefined"
    :disabled="disabled"
    :target="target"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import VMLinkMixin from './VMLink.mixin';

@Component<VMClickable>({
  name: 'vmClickable',
})
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

  get target(): string | undefined {
    return this.compTag === 'a' ? '_blank' : undefined;
  }

  public click(e: MouseEvent): void {
    this.$emit('click', e);
  }
}
</script>
