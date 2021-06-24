<template>
  <div
    class="vm-card"
    :is="!!to || !!routeName || !!href ? 'router-link' : undefined"
    :to="to || { name: routeName }"
    :href="href"
    @click="clicked"
    :style="{ '--vm-color': vmColor, '--vm-paragraph': vmBackground }"
    :disabled="disabled"
    :autoHeight="autoHeight"
  >
    <component
      :is="cardComp"
      :title="title"
      :subtitle="subtitle"
      :video="video"
      :image="image"
    >
      <template slot="default"><slot name="default" /></template>
      <template slot="media"><slot name="media" /></template>
      <template slot="title"><slot name="title" /></template>
      <template slot="subtitle"><slot name="subtitle" /></template>
      <template slot="header"><slot name="header" /></template>
    </component>
  </div>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import VMCardMixin from '@/vuement/mixins/VMCard.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';
import VMFrostedCard from './types/VMFrostedCard.vue';
import VMFullscreenCard from './types/VMFullscreenCard.vue';
import VMPlainCard from './types/VMPlainCard.vue';
import VMPreviewCard from './types/VMPreviewCard.vue';

@Component({
  components: {
    'vm-plain-card': VMPlainCard,
    'vm-fullscreen-card': VMFullscreenCard,
    'vm-preview-card': VMPreviewCard,
    'vm-frosted-card': VMFrostedCard,
  },
})
export default class VMCard extends Mixins(
  VMCProp,
  VMBgProp,
  VMLinkMixin,
  VMCardMixin
) {
  @Prop({ default: 'plain' }) type!: string;
  @Prop({ default: false }) autoHeight!: boolean;

  get cardComp(): string {
    const types = ['plain', 'fullscreen', 'preview', 'frosted'];
    var type: string | null = null;
    if (!this.type) type = 'plain';
    else if (types.includes(this.type.toLowerCase()))
      type = this.type.toLowerCase();
    return `vm-${type}-card`;
  }
}
</script>

<style lang="scss" scoped>
.vm-card {
  color: rgba(var(--vm-color), 1);
  background: rgba(var(--vm-paragraph), 1);
  border-radius: #{1.5 * $border-radius};
  display: block;
  text-decoration: none;

  &[autoHeight] {
    height: fit-content;
  }

  &[disabled] {
    filter: saturate(25%);
  }

  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.0174) translateY(-5px);
  }
}
</style>
