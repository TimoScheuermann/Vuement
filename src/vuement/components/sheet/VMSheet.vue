<template>
  <span>
    <transition name="appear">
      <div
        class="vm-sheet__background"
        v-if="visible"
        @click.stop="close"
        @touchmove.prevent
        @wheel.prevent
        @mousewheel.prevent
        @DOMMouseScroll.prevent
      />
    </transition>

    <transition name="slide">
      <div
        class="vm-sheet"
        v-if="visible"
        :style="{ '--vm-color': vmColor, '--vm-paragraph': vmBackground }"
      >
        <div class="vm-sheet__close-button" v-if="closeButton">
          <VMMenuButton icon="cross" :filled="true" @click="close" />
        </div>
        <div class="vm-sheet__head" v-if="title || $slots.head">
          <slot name="head">
            <div class="vm-sheet__head--title">{{ title }}</div>
          </slot>
        </div>

        <div class="vm-sheet__content">
          <slot />
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
import VMMenuButton from '../menuButton/VMMenuButton.vue';

@Component({
  components: {
    VMMenuButton,
  },
})
export default class VMSheet extends Mixins(VMCProp, VMBgProp, VMOpensMixin) {
  @Prop() title!: string;
  @Prop({ default: true }) closeButton!: boolean;

  public vmOpensGroup = 'overlay';

  mounted(): void {
    document.body.appendChild(this.$el);
  }

  beforeDestroy(): void {
    document.body.removeChild(this.$el);
  }
}
</script>

<style lang="scss" scoped>
.vm-sheet__background {
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

.vm-sheet {
  position: fixed;
  z-index: 2001;

  left: 50%;
  bottom: 15px;
  transform: translate(-50%, 0%);

  color: rgba(var(--vm-color), 1);
  background: rgba(var(--vm-paragraph), 1);
  border-radius: 30px;

  @media only screen and(max-width: 400px) {
    padding: 5vw;
    width: calc(90vw - 30px);
  }
  @media only screen and(min-width: 401px) {
    padding: 20px;
    min-width: 260px;
    max-width: calc(90vw - 40px);
  }

  &__content {
    @include vm-scrollbar();
    overflow: auto;
    max-height: calc(90vh - 10vw - 60px);
  }

  &__head {
    &--title {
      font-weight: bold;
      text-align: center;
      font-size: 1.4em;
    }
    margin-bottom: 10px;
  }

  &__close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 25px;
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
  transform: translate(-50%, 100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: 0.2s ease-in-out;
}
.slide-enter-active {
  transition-delay: 0.1s;
}
</style>
