<template>
  <router-link
    v-if="to || routeName || href"
    :to="to || { name: routeName }"
    :href="href"
    :style="tcColor"
    @click.stop="clicked"
    class="tc-link"
  >
    <slot />
  </router-link>
</template>

<script lang="ts">
import TCLinkMixin from '@/tcComponents/mixins/TCLink.mixin';
import { getColor } from '@/tcComponents/util';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class TCLink extends Mixins(TCLinkMixin) {
  @Prop({ default: 'primary' }) color!: string;

  get tcColor(): string {
    return `--tc-color: ${getColor(this, this.color)}`;
  }
}
</script>

<style lang="scss" scoped>
.tc-link {
  color: var(--tc-color);
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
