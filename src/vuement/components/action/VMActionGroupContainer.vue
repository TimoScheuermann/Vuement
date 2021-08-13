<template>
  <transition name="appear">
    <div
      class="vm-action-group-container"
      :style="{ top, left }"
      v-if="containerVisible"
    >
      <VMActionItem
        class="vm-action-group-container--title"
        :title="title"
        :color="color"
      >
        <div
          class="vm-action-group-container__icon"
          :rotate="itemsVisible"
          slot="icon"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="6.901" height="12">
            <path
              d="M.264 11.736a.9.9 0 010-1.274l4.461-4.461L.264 1.54a.9.9 0 010-1.275.9.9 0 011.275 0l5.1 5.1a.9.9 0 010 1.275l-5.1 5.1a.9.9 0 01-.637.264.9.9 0 01-.638-.268z"
            />
          </svg>
        </div>
      </VMActionItem>
      <VMRevealer>
        <div v-if="itemsVisible">
          <slot />
        </div>
      </VMRevealer>
    </div>
  </transition>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import VMRevealer from '../revealer/VMRevealer.vue';
import VMActionItem from './VMActionItem.vue';

@Component<VMActionGroupContainer>({
  name: 'vmActionGroupContainer',
  components: {
    VMActionItem,
    VMRevealer,
  },
})
export default class VMActionGroupContainer extends Mixins(VMCProp) {
  @Prop() title!: string;
  @Prop() visible!: boolean;
  @Prop({ default: '0px' }) top!: string;
  @Prop({ default: '0px' }) left!: string;

  public itemsVisible = false;
  public containerVisible = false;

  mounted(): void {
    this.$on('close', () => {
      this.$emit('closeOverlay');
    });
  }

  @Watch('visible')
  visibleChanged(): void {
    if (this.visible) {
      this.itemsVisible = false;
      this.containerVisible = true;
      requestAnimationFrame(() => {
        this.itemsVisible = true;
      });
    } else {
      this.containerVisible = true;
      this.itemsVisible = false;
      requestAnimationFrame(() => {
        this.containerVisible = false;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-action-group-container {
  position: fixed;

  border-radius: $border-radius;
  overflow: hidden;
  z-index: 55;
  font-size: 1rem;

  transform-origin: top center;
  transform: scale(1.05);

  box-shadow: inset 0 0 0 1.5px rgba(var(--vm-container), 0.5),
    2px 4px 8px rgba(#111, 0.15);

  background: rgba(var(--vm-container), 1);
  @supports (backdrop-filter: saturate(180%) blur(20px)) {
    background: rgba(var(--vm-container), 0.52);
    backdrop-filter: saturate(180%) blur(20px);
  }

  &--title {
    &,
    &:hover {
      background: rgba(var(--vm-paragraph), 1) !important;
      color: color(var(--vm-color), 1) !important;
      fill: color(var(--vm-color), 1) !important;
    }
  }

  &__icon {
    transition: 0.3s ease-in-out;
    fill: rgba(var(--vm-color), 1);

    &[rotate] {
      transform: rotate(90deg);
    }
  }
}

.appear-enter-active {
  transition: all 0.2s ease-in-out;
}
.appear-leave-active {
  transition: all 0.2s ease-in-out;
}
.appear-enter,
.appear-leave-to {
  opacity: 0;
  transform: scale(1);
}
</style>
