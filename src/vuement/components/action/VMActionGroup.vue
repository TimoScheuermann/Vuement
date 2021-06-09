<template>
  <div
    class="vm-action-group"
    @click.stop="handleClick"
    :disabled="disabled"
    :style="{ '--vm-color': vmColor }"
    :expanded="expanded"
  >
    <VMActionGroupHead
      :main="true"
      :color="color"
      :disabled="disabled"
      :icon="icon"
      :title="title"
      :expanded="expanded"
      @toggleExpand="toggleExpand"
    />

    <transition name="appear">
      <div v-if="expanded" class="vm-action-group--container" :shrink="shrink">
        <VMActionGroupHead
          :color="color"
          :disabled="disabled"
          :icon="icon"
          :title="title"
          :expanded="expanded"
          @toggleExpand="toggleExpand"
        />
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';
import VMActionGroupHead from './VMActionGroupHead.vue';

@Component({
  components: {
    VMActionGroupHead,
  },
})
export default class VMActionGroup extends Mixins(VMCProp) {
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() disabled!: boolean;

  public expanded = false;
  public shrink = false;

  mounted(): void {
    this.$on('shrink', (shrink: boolean) => {
      this.shrink = shrink;
    });
  }

  public toggleExpand(): void {
    this.expanded = !this.expanded;
    this.$parent.$emit('shrink', this.expanded);
  }
}
</script>

<style lang="scss" scoped>
.vm-action-group {
  position: relative;

  &:last-child {
    border-radius: 0 0 $border-radius $border-radius;
  }

  &:first-child {
    border-radius: $border-radius $border-radius 0 0;
  }

  & ~ .vm-action-group,
  & ~ /deep/ .vm-action-item {
    border-top: 1.5px solid rgba(var(--vm-border), 1);
  }

  &--container {
    pointer-events: all;
    transform: scale(1.1);
    top: -10px;
    position: absolute;

    border-radius: $border-radius;
    z-index: 50;
    font-size: 1rem;

    box-shadow: inset 0 0 0 1.5px rgba(var(--vm-container), 0.5);
    background: rgba(var(--vm-container), 1);

    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    filter: brightness(110%);

    &[shrink] {
      filter: brightness(100%);
      transform: scale(1);
      pointer-events: none;
    }
  }
}

.appear-enter,
.appear-leave-to {
  top: 0;
  left: 0;
  opacity: 0;
  transform: scale(1);
  filter: brightness(100%);
}
.appear-enter-active {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.appear-leave-active {
  transition: all 0.3 ease;
}
</style>
