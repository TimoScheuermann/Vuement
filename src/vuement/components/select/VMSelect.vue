<template>
  <div
    class="vm-select"
    :disabled="disabled"
    :style="{ '--vm-color': vmColor, '--vm-container': vmBackground }"
  >
    <div
      class="vm-select--container"
      ref="trigger"
      @click.stop.capture="visible = !visible"
      :frosted="frosted"
    >
      <div class="vm-select--container__background" />
      <div class="vm-select--container--icon" v-if="icon">
        <i :class="icon" />
      </div>
      <div class="vm-select--container--placeholder">
        <span>{{ selectedDisplay || placeholder }}</span>
      </div>
    </div>
    <transition name="appear" appear>
      <div class="vm-select--items" :pos="pos" v-if="visible">
        <div class="vm-select--items__background" />
        <div class="vm-select--items__title" v-if="title">{{ title }}</div>
        <div class="vm-select--items__items"><slot /></div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { getContainerPosition } from '@/vuement/dev/util';
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';

export interface VMSelectSelection {
  id: string;
  title: string;
  state: boolean;
}

@Component
export default class VMSelect extends Mixins(VMCProp, VMBgProp) {
  @Prop() icon!: string;
  @Prop() frosted!: boolean;
  @Prop() title!: string;

  @Prop({ default: false }) value!: boolean;
  @Prop({ default: 'Select one' }) placeholder!: string;
  @Prop({ default: false }) multiple!: boolean;
  @Prop({ default: false }) disabled!: boolean;

  public visible = !!this.value;
  public pos = '';
  public selection: VMSelectSelection[] = [];

  mounted(): void {
    window.addEventListener('scroll', this.updatePosition);
    window.addEventListener('resize', this.updatePosition);
    window.addEventListener('click', this.close);

    this.updatePosition();
    this.$on('select', this.updateSelection);

    this.$nextTick(() => {
      this.visible = this.value;
    });
  }

  beforeDestroy(): void {
    window.removeEventListener('scroll', this.updatePosition);
    window.removeEventListener('resize', this.updatePosition);
    window.removeEventListener('click', this.close);
  }

  @Watch('visible', { immediate: true })
  visibleChanged(): void {
    if (this.visible) {
      this.$nextTick(this.updateChildren);
      this.updatePosition();
    }
    this.$emit('input', this.visible);
  }

  @Watch('value', { immediate: true })
  valueChanged(): void {
    this.visible = this.value;
  }

  get selectedDisplay(): string | null {
    const display = this.selection
      .filter((x) => x.state)
      .map((x) => x.title)
      .join(', ');
    return display.length === 0 ? null : display;
  }

  public updateChildren(): void {
    this.$children.forEach((c) => c.$emit('selection', this.selection));
  }

  public updatePosition(): void {
    this.pos = getContainerPosition(this.$refs.trigger);
  }

  public close(): void {
    this.visible = false;
  }

  public updateSelection(data: VMSelectSelection): void {
    let exists = false;
    this.selection = this.selection.map((x) => {
      if (x.id === data.id) {
        exists = true;
        return data;
      }
      if (!this.multiple && data.state) {
        return { ...x, state: false };
      }
      return x;
    });
    if (!exists) this.selection.push(data);

    if (!this.multiple && data.state) {
      this.updateChildren();
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-select {
  position: relative;
  display: inline-block;
  margin: 2.5px;
  max-width: calc(100% - 5px);
  cursor: pointer;

  color: rgba(var(--vm-color), 1);

  &[frosted] {
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      .vm-select--container {
        &__background {
          opacity: 0.5;
        }
        backdrop-filter: saturate(180%) blur(20px);
      }
    }
  }

  &[disabled] {
    filter: brightness(75%);
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not([disabled]) .vm-select--container:active {
    filter: brightness(105%);
    transform: scale(0.95);
  }

  &--container {
    transition: 0.2s ease-in-out;
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    width: calc(100% - 10px);
    padding: 0 5px;
    border-radius: $border-radius;

    &__background {
      position: absolute;
      border-radius: inherit;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(var(--vm-container), 1);
    }
    &--icon {
      position: relative;
      display: grid;
      place-content: center;
      margin-right: 2.5px;
      padding-right: 2.5px;

      &::after {
        content: '';
        position: absolute;
        width: 1px;
        background: currentColor;
        opacity: 0.5;
        right: -2.5px;
        height: 60%;
        top: 20%;
        border-radius: 2px;
      }
    }

    &--placeholder {
      position: relative;
      display: flex;
      flex: 1 1 0px;
      padding: 5px;
      user-select: none;

      span {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }
  }

  &--items {
    position: absolute;
    border-radius: $border-radius;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
    z-index: 50;

    @include backdrop-blur();

    &[pos='tl'] {
      top: calc(100% + 5px);
      left: 0px;
      transform-origin: top left;
    }
    &[pos='tr'] {
      top: calc(100% + 5px);
      right: 0px;
      transform-origin: top right;
    }
    &[pos='bl'] {
      bottom: calc(100% + 5px);
      left: 0px;
      transform-origin: bottom left;
    }
    &[pos='br'] {
      bottom: calc(100% + 5px);
      right: 0px;
      transform-origin: bottom right;
    }

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      background: rgba(var(--vm-container), 1);
    }

    &__title {
      padding: 5px 10px;
      opacity: 0.75;
      font-size: 14px;
      position: relative;
    }

    &__items {
      max-height: calc(50vh - 50px);
      overflow: auto;
    }
  }
}

.appear-enter-active,
.appear-leave-active {
  transition: all 0.3s cubic-bezier(0.63, 1.65, 0.42, 0.75);
}
.appear-enter,
.appear-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
