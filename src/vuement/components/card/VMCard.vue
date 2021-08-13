<template>
  <VMClickable
    class="vm-card"
    @click="clicked"
    :style="{ '--vm-color': vmColor, '--vm-paragraph': vmBackground }"
    :autoHeight="autoHeight"
    :disabled="disabled"
    :href="href"
    :routeName="routeName"
    :to="to"
    fallback="div"
  >
    <component
      :is="cardType"
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
  </VMClickable>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import VMCardMixin from '@/vuement/mixins/VMCard.mixin';
import VMClickable from '@/vuement/mixins/VMClickable.vue';
import * as types from './types';

@Component<VMCard>({
  name: 'vmCard',
  components: {
    VMClickable,
    ...types,
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

  get types(): string[] {
    return Object.keys(types).map((x) =>
      x.toLowerCase().substring(2, x.length - 4)
    );
  }

  get cardType(): string {
    let type = (this.type || '').toLowerCase();
    if (this.types.includes(type)) {
      return `vm-${type}-card`;
    }
    return `vm-plain-card`;
  }
}
</script>

<style lang="scss" scoped>
.vm-card {
  @include vm-clickable();

  display: block;
  color: rgba(var(--vm-color), 1);
  background: rgba(var(--vm-paragraph), 1);
  border-radius: #{1.5 * $border-radius};

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
