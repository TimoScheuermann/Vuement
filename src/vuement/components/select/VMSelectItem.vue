<template>
  <div
    v-if="id"
    class="vm-select-item"
    @click.capture.stop="clicked"
    :selected="isSelected"
    :style="{ '--vm-primary': vmColor }"
  >
    <i :class="icon" />
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import { VMSelectSelection } from './VMSelect.vue';

@Component
export default class VMSelectItem extends Mixins(VMCProp) {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() selected!: boolean;
  @Prop({ required: true }) id!: string;

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
    const item = selection.filter((x) => x.id === this.id)[0] || null;
    if (item) this.isSelected = item.state;
    else {
      this.isSelected = !!this.selected;
      this.updateState();
    }
  }

  public updateState(): void {
    this.$parent.$emit('select', {
      id: this.id,
      state: this.isSelected,
      title: this.title,
    } as VMSelectSelection);
  }
}
</script>

<style lang="scss" scoped>
.vm-select-item {
  display: grid;
  grid-template-columns: 20px 1fr;
  padding: 5px;

  cursor: pointer;
  position: relative;
  user-select: none;

  transition: 0.1s ease-in-out;

  &:not([disabled]):hover {
    background: rgba(var(--vm-color), 0.12);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  & + .vm-select-item::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: rgba(var(--vm-color), 1);
    opacity: 0.1;
  }

  &[selected] {
    color: rgba(var(--vm-primary), 1);
  }

  i {
    display: grid;
    place-content: center;
  }

  span {
    display: grid;
    place-content: center start;
    white-space: nowrap;
    padding-right: 5px;
    padding-left: 15px;
  }
}
</style>
