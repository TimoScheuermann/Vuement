<template>
  <div
    class="tc-select-item"
    :selected="isSelected"
    v-if="id"
    @click.capture.stop="clicked"
  >
    <i :class="icon" :style="selectItemColor" />
    <span :style="selectItemColor">{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { getColor } from '@/tcComponents/util';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { TCSelectSelection } from './TCSelect.vue';

@Component
export default class TCSelectItem extends Vue {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop({ default: 'primary' }) color!: string;
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

  get selectItemColor(): string | null {
    return `--tc-color:${getColor(this, this.color)};`;
  }

  public clicked(): void {
    this.isSelected = !this.isSelected;
    this.updateState();
  }

  public compareState(selection: TCSelectSelection[]): void {
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
    } as TCSelectSelection);
  }
}
</script>

<style lang="scss" scoped>
.tc-select-item {
  display: grid;
  grid-template-columns: 20px 1fr;
  padding: 5px;

  cursor: pointer;
  position: relative;
  user-select: none;

  transition: 0.1s ease-in-out;

  &:not([disabled]):hover {
    background: rgba(#111, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  & + .tc-select-item::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: var(--tc-color);
    opacity: 0.1;
  }

  &[selected] {
    i,
    span {
      color: var(--tc-color);
    }
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
