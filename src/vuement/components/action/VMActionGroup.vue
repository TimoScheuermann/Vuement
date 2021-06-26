<template>
  <button class="vm-action-group" @click.stop="handleClick">
    <div class="vm-action-group__indicator" :rotate="visible">
      <svg xmlns="http://www.w3.org/2000/svg" width="6.901" height="12">
        <path
          d="M.264 11.736a.9.9 0 010-1.274l4.461-4.461L.264 1.54a.9.9 0 010-1.275.9.9 0 011.275 0l5.1 5.1a.9.9 0 010 1.275l-5.1 5.1a.9.9 0 01-.637.264.9.9 0 01-.638-.268z"
        />
      </svg>
    </div>

    <div class="vm-action-group__title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="vm-action-group__icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon" :class="icon" />
      </slot>
    </div>

    <div
      class="vm-action-group--container"
      :style="{ '--vm-action-scale': scale }"
      :hide="!visible"
    >
      <button
        :hide="!visible"
        class="vm-action-group--container__head"
        @click.stop="handleClick"
      >
        <div class="vm-action-group__indicator" :rotate="visible">
          <svg xmlns="http://www.w3.org/2000/svg" width="6.901" height="12">
            <path
              d="M.264 11.736a.9.9 0 010-1.274l4.461-4.461L.264 1.54a.9.9 0 010-1.275.9.9 0 011.275 0l5.1 5.1a.9.9 0 010 1.275l-5.1 5.1a.9.9 0 01-.637.264.9.9 0 01-.638-.268z"
            />
          </svg>
        </div>

        <div class="vm-action-group__title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="vm-action-group__icon" v-if="icon || $slots.icon">
          <slot name="icon">
            <i v-if="icon" :class="icon" />
          </slot>
        </div>
      </button>
      <VMRevealer>
        <div v-if="visible">
          <span />
          <slot />
        </div>
      </VMRevealer>
    </div>
  </button>
</template>

<script lang="ts">
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Mixins, Watch } from 'vue-property-decorator';
import VMRevealer from '../revealer/VMRevealer.vue';

/**
 * This component isn't recommended for final use as of yet,
 * but thanks for beeing interested.
 */
@Component({
  components: {
    VMRevealer,
  },
})
export default class VMActionGroup extends Mixins(VMCProp) {
  @Prop({ default: 'ti-house' }) icon!: string;
  @Prop() title!: string;
  @Prop() disabled!: boolean;

  public visible = false;
  public scale = 1;

  mounted(): void {
    this.$on('shrink', () => {
      this.$parent.$emit('shrink');
      this.scale -= 0.1;
    });
    this.$on('grow', () => {
      this.$parent.$emit('grow');
      this.scale += 0.1;
    });
    this.$on('close', () => {
      this.visible = false;
    });
  }

  @Watch('visible')
  visibleChanged(): void {
    this.scale = 1;
    this.$parent.$emit(this.visible ? 'shrink' : 'grow');
  }

  public handleClick(): void {
    if (this.disabled) return;
    this.visible = !this.visible;
  }
}
</script>

<style lang="scss" scoped>
.vm-action-group {
  &,
  .vm-action-group--container__head {
    @include vm-clickable();

    display: grid;
    grid-template-columns: 15px 1fr auto;
    grid-gap: 0;
    width: 100%;

    font-weight: 500;
    font-size: calc(var(--vm-action-scale) * 1rem);
    padding: 5px 15px 5px 0;

    color: rgba(var(--vm-color), 0.8);

    user-select: none;
    transition: 0.1s ease-in-out;

    cursor: pointer;
    &:not([disabled]):hover {
      color: rgba(var(--vm-color), 1);
      background: rgba(var(--vm-color), 0.12);
    }

    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &__indicator {
      display: grid;
      place-content: center;
      opacity: 0.5;
      height: 100%;

      transition: 0.3s ease-in-out;
      &[rotate] {
        transform: rotate(90deg);
      }
    }

    &__icon {
      margin-left: 15px;
      display: grid;
      place-content: center;
      height: 100%;
    }

    &__title {
      white-space: nowrap;
      text-align: left;
    }
  }

  position: relative;
  z-index: 40;
  .vm-action-group--container {
    position: absolute;
    z-index: 2;
    border-radius: $border-radius;
    z-index: 50;
    font-size: 1rem;
    box-shadow: inset 0 0 0 1.5px rgba(var(--vm-container), 0.5);
    background: rgba(var(--vm-container), 1);
    @supports (backdrop-filter: saturate(180%) blur(20px)) {
      // background: rgba(var(--vm-container), 0.52);
      // backdrop-filter: saturate(180%) blur(20px);
    }

    &:not([hide]) {
      margin-top: -5px;
    }
    transition: all 0.2s ease-in-out, transform 0s;
    &[hide] {
      transition: all 0.2s ease-in-out, transform 0s 0.3s;
      transform: scale(0);
    }

    &__head {
      background: rgba(var(--vm-background), 1);
      &:hover {
        color: rgba(var(--vm-color), 0.8) !important;
        background: rgba(var(--vm-background), 1) !important;
      }

      transition: all 0.2s ease-in-out, transform 0s, opacity 0s;
      &[hide] {
        transition: all 0.2s ease-in-out, transform 0s 0.3s, opacity 0s 0.3s;
        transform: scale(0);
        background: none;
        opacity: 0;
      }
    }
  }
}

.appear-leave-active,
.appear-enter-active {
  transition: all 0.4s ease-in-out;
}

.appear-enter,
.appear-leave-to {
  opacity: 0;
}
</style>
