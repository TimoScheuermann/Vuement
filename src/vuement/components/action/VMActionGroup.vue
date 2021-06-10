<template>
  <div class="vm-action-group" ref="target">
    <VMActionItem
      :color="color"
      :disabled="disabled"
      :title="title"
      @click.stop="handleClick"
    >
      <div class="vm-action-group__icon" :rotate="visible" slot="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="6.901" height="12">
          <path
            d="M.264 11.736a.9.9 0 010-1.274l4.461-4.461L.264 1.54a.9.9 0 010-1.275.9.9 0 011.275 0l5.1 5.1a.9.9 0 010 1.275l-5.1 5.1a.9.9 0 01-.637.264.9.9 0 01-.638-.268z"
          />
        </svg>
      </div>
    </VMActionItem>
  </div>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';
import VMActionItem from './VMActionItem.vue';
import VMActionGroupContainer from './VMActionGroupContainer.vue';

@Component({
  components: {
    VMActionItem,
  },
})
export default class VMActionGroup extends Mixins(VMCProp) {
  @Prop() title!: string;
  @Prop() disabled!: boolean;

  public instance: VMActionGroupContainer | null = null;
  public visible = false;

  mounted(): void {
    this.mountInstance();

    this.$on('closeOverlay', this.close);
    this.$on('positionChanged', this.updatePosition);
  }

  beforeDestroy(): void {
    this.destroyInstance();
  }

  get parentContainer(): HTMLElement {
    return this.$parent.$refs['vm-action-pop-over'] as HTMLElement;
  }

  public mountInstance(): void {
    this.destroyInstance();
    this.instance = new VMActionGroupContainer();
    this.instance.$slots.default = this.$slots.default;
    this.instance.$mount();
    this.parentContainer.appendChild(this.instance.$el);

    this.instance.$props.title = this.title;
    this.instance.$props.color = this.color;

    this.instance.$on('closeOverlay', this.close);
  }

  public destroyInstance(): void {
    if (!this.instance) return;
    this.instance.$destroy();
    this.instance.$el.remove();
    this.instance = null;
  }

  public updatePosition(): void {
    if (this.instance) {
      const target = this.$refs.target as HTMLElement;
      const { top, left } = target.getBoundingClientRect();
      this.instance.$props.top = top + 'px';
      this.instance.$props.left = left + 'px';
    }
  }

  public handleClick(): void {
    this.visible = !this.visible;

    if (this.visible) {
      this.mountInstance();
    }

    this.$parent.$emit('shrink', this.visible);
    this.updatePosition();
    if (this.instance) this.instance.$props.visible = this.visible;

    if (!this.visible) {
      setTimeout(() => {
        this.destroyInstance();
      }, 200);
    }
  }

  public close(): void {
    if (this.instance) {
      this.visible = true;
      this.handleClick();
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-action-group {
  transition: 0.2s ease-in-out;
  fill: rgba(var(--vm-color), 0.8);
  &:not([disabled]):hover {
    fill: rgba(var(--vm-color), 1);
  }

  &__icon {
    transition: 0.3s ease-in-out;

    &[rotate] {
      transform: rotate(90deg);
    }
  }
}
</style>
