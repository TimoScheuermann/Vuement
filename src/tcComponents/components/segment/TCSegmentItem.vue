<template>
  <div
    class="tc-segment-item"
    @click="clicked"
    :active="active"
    :style="itemActiveColor"
  >
    <i v-if="icon && !iconTrailing" :class="icon" />
    <span v-if="title">{{ title }}</span>
    <i v-if="icon && iconTrailing" :class="icon" />
  </div>
</template>

<script lang="ts">
import { getColor } from '@/tcComponents/util';
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TCSegmentItem extends Vue {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop({ default: false }) iconTrailing!: boolean;
  @Prop({ default: 'primary' }) color!: string;

  public active = false;

  mounted(): void {
    this.$on('state', this.setState);
    this.$parent.$emit('itemChange');
  }

  beforeDestroy(): void {
    this.$parent.$emit('itemChange');
  }

  get itemActiveColor(): string {
    return `--tc-s-item:${getColor(this, this.color)}`;
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
.tc-segment-item {
  display: flex;
  flex: 1 1 0px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: 0 2.5px;
  cursor: pointer;
  user-select: none;

  min-height: 24.33px;
  // background: rgba(red, 0.25);

  transition: 0.2s ease-in-out;
  &[active] {
    color: var(--tc-s-item);
    transition-delay: 0.1s;
  }

  i,
  span {
    margin: 0 2.5px;
  }
}
</style>
