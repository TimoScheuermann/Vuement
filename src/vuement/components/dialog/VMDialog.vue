<template>
  <span>
    <transition name="appear">
      <div
        v-if="visible"
        class="vm-dialog__background"
        @click.stop="close"
        @touchmove.prevent
        @wheel.prevent
        @mousewheel.prevent
        @DOMMouseScroll.prevent
      />
    </transition>
    <transition name="slide">
      <div
        v-if="visible"
        class="vm-dialog"
        :style="{
          '--vm-color': vmColor,
          '--vm-paragraph': vmBackground,
          '--vm-border': vmBorder,
        }"
      >
        <div
          class="vm-dialog__dragger"
          v-if="dragger"
          v-touch:swipe.bottom="close"
        />

        <div class="vm-dialog__button" v-if="$slots.button">
          <slot name="button" />
        </div>

        <slot name="head">
          <div class="vm-dialog__head" v-if="title">{{ title }}</div>
        </slot>

        <div class="vm-dialog__content">
          <slot />
        </div>

        <div class="vm-dialog__footer" v-if="$slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </transition>
  </span>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import VMOpensMixin from '@/vuement/mixins/VMOpens.mixin';
import { Component, Prop, Mixins } from 'vue-property-decorator';

@Component
export default class VMDialog extends Mixins(VMCProp, VMBgProp, VMOpensMixin) {
  @Prop() title!: string;
  @Prop() border!: string;
  @Prop({ default: false }) dragger!: boolean;

  public vmOpensGroup = 'overlay';

  mounted(): void {
    document.body.appendChild(this.$el);
  }

  beforeDestroy(): void {
    try {
      document.body.removeChild(this.$el);
    } catch {
      //
    }
  }

  get vmBorder(): string | null {
    return this.border ? this.getColor(this.border) : null;
  }
}
</script>

<style lang="scss" scoped>
.vm-dialog__background {
  position: fixed;
  background: rgba(#000, 0.85);
  @supports (backdrop-filter: saturate(180%) blur(20px)) {
    backdrop-filter: saturate(180%) blur(10px);
    background: rgba(#000, 0.65);
  }
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
}

.vm-dialog {
  position: fixed;
  z-index: 2001;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 200px;
  width: calc(100vw - 40px);
  max-width: 500px;

  border-radius: #{2 * $border-radius};
  background: rgba(var(--vm-paragraph), 1);
  color: rgba(var(--vm-color), 1);

  &__dragger {
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translate(-50%, -50%);

    height: 3px;
    width: 100%;
    background: currentColor;
    opacity: 0.5;

    width: 40%;
    max-width: 200px;
  }

  &__button {
    font-size: 1.4em;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  &__head {
    font-weight: bold;
    font-size: 1.4em;
    text-align: center;
    padding: 20px {
      bottom: 10px;
    }
  }
  &__head ~ &__content {
    padding-top: 0;
  }

  &__content {
    max-height: calc(
      100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 200px
    );
    overflow: auto;
    @include vm-scrollbar();
    padding: 20px;
  }

  &__footer {
    border-radius: inherit;
    border-top-right-radius: 0;
    border-top-left-radius: 0;

    border-top: 1.5px solid rgba(var(--vm-border), 1);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
  }
}

.appear-enter,
.appear-leave-to {
  opacity: 0;
}

.appear-leave-active,
.appear-enter-active {
  transition: 0.3s ease-in-out;
}
.appear-leave-active {
  transition-delay: 0.1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.2s ease-in-out;
}
.slide-enter-active {
  transition-delay: 0.1s;
}
</style>
