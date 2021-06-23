<template>
  <div
    v-if="id"
    class="vm-select-item"
    @click.capture.stop="clicked"
    :selected="isSelected"
    :style="{ '--vm-primary': vmColor }"
  >
    <i v-if="icon" :class="icon" />
    <span v-else />
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { VMSelectSelection } from '@/vuement/dev/interfaces';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';

@Component
export default class VMSelectItem extends Mixins(VMCProp) {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() selected!: boolean;
  @Prop({ required: true }) vmId!: string;

  public isSelected = !!this.selected;

  mounted(): void {
    this.$on('selection', this.compareState);
  }

  @Watch('selected')
  selectedChanged(): void {
    this.isSelected = !!this.selected;
    this.updateState();
  }

  public clicked(): void {
    this.isSelected = !this.isSelected;
    this.updateState();
  }

  public compareState(selection: VMSelectSelection[]): void {
    const item = selection.filter((x) => x.id === this.vmId)[0] || null;
    if (item) this.isSelected = item.state;
    else {
      this.isSelected = !!this.selected;
      this.updateState();
    }
  }

  public updateState(): void {
    this.$parent.$emit('select', {
      id: this.vmId,
      state: this.isSelected,
      title: this.title,
    } as VMSelectSelection);
  }
}
</script>

<style lang="scss" scoped>
.vm-select-item {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px 15px;
  color: rgba(var(--vm-color), 1);

  position: relative;
  user-select: none;

  transition: 0.1s ease-in-out;

  &[selected] {
    color: rgba(var(--vm-primary), 1);
  }

  cursor: pointer;
  &:not([disabled]):hover {
    background: rgba(var(--vm-color), 0.12);
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  & + .vm-select-item,
  & + /deep/ .vm-action-item {
    border-top: 1.5px solid rgba(var(--vm-border), 1);
  }

  i {
    margin-right: 15px;
  }

  span {
    white-space: nowrap;
  }
}
</style>
