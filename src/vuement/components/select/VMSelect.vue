<template>
  <div
    class="vm-select"
    :disabled="disabled"
    :style="{ '--vm-color': vmColor, '--vm-container': vmBackground }"
  >
    <div
      class="vm-select--container"
      ref="trigger"
      @click.stop.capture="toggleVisible"
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
        <div class="vm-select--items__title" v-if="title">{{ title }}</div>
        <div class="vm-select--items__items"><slot /></div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { VMSelectSelection } from '@/vuement/dev/interfaces';
import { getContainerPosition } from '@/vuement/dev/util';
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMOpensMixin from '@/vuement/mixins/VMOpens.mixin';
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import VMRevealer from '../revealer/VMRevealer.vue';

@Component({
  components: {
    VMRevealer,
  },
})
export default class VMSelect extends Mixins(VMCProp, VMBgProp, VMOpensMixin) {
  @Prop() icon!: string;
  @Prop() frosted!: boolean;
  @Prop() title!: string;

  @Prop({ default: 'Select one' }) placeholder!: string;
  @Prop({ default: false }) multiple!: boolean;
  @Prop({ default: false }) disabled!: boolean;

  public pos = '';
  public vmOpensGroup = 'menu';
  public selection: VMSelectSelection[] = [];

  mounted(): void {
    window.addEventListener('scroll', this.updatePosition);
    window.addEventListener('resize', this.updatePosition);
    window.addEventListener('click', this.close);

    this.updatePosition();
    this.$on('select', this.updateSelection);

    this.visible = true;
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
    this.$emit('selection', this.selection);
    this.updateChildren();
  }
}
</script>

<style lang="scss">
.vm-select {
  .vm-select--items .vm-spacer {
    position: relative;
    background: rgba(var(--vm-border), 1);
  }
}
</style>

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
    font-size: 1rem;

    box-shadow: inset 0 0 0 1.5px rgba(var(--vm-container), 0.5);
    background: rgba(var(--vm-container), 1);
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      background: rgba(var(--vm-container), 0.52);
      backdrop-filter: saturate(180%) blur(20px);
    }

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

    &__title {
      padding: 7.5px 10px;
      opacity: 0.75;
      font-size: 12px;
      font-weight: 500;
      position: relative;
      color: rgba(var(--vm-color), 0.8);
      border-bottom: 1.5px solid rgba(var(--vm-border), 1);
    }

    &__items {
      @include vm-scrollbar();
      max-height: calc(50vh - 50px);
      overflow: auto;
      min-width: 135px;
    }
  }
}

.appear-enter-active {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.appear-leave-active {
  transition: all 0.3 ease;
}
.appear-enter,
.appear-leave-to {
  transform: scale(0.5, 0);
  opacity: 0;
}
</style>
