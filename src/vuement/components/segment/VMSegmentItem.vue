<template>
  <div
    class="vm-segment-item"
    @click="clicked"
    :active="active"
    :style="{ '--vm-primary': vmColor }"
  >
    <i v-if="icon && !iconTrailing" :class="icon" />
    <span v-if="title">{{ title }}</span>
    <i v-if="icon && iconTrailing" :class="icon" />
  </div>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Mixins, Prop } from 'vue-property-decorator';

@Component
export default class VMSegmentItem extends Mixins(VMCProp) {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop({ default: false }) iconTrailing!: boolean;

  public active = false;

  mounted(): void {
    this.$on('state', this.setState);
    this.$parent.$emit('itemChange');
  }

  beforeDestroy(): void {
    this.$parent.$emit('itemChange');
  }

  public setState(state: boolean): void {
    this.active = state;
  }

  public clicked(): void {
    this.$parent.$emit('setSegment', this.$parent.$children.indexOf(this));
  }
}
</script>

<style lang="scss" scoped>
.vm-segment-item {
  display: flex;
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: 0 2.5px;
  cursor: pointer;
  user-select: none;

  min-height: 24.33px;

  transition: 0.2s ease-in-out;
  &[active] {
    color: rgba(var(--vm-primary), 1);
    transition-delay: 0.1s;
  }

  i,
  span {
    margin: 0 2.5px;
  }
}
</style>
