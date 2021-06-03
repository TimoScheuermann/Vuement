<template>
  <transition name="appear" appear :delay="300">
    <div
      v-if="visible"
      class="vm-sheet"
      @click.stop="close"
      @touchmove.self.prevent
      @wheel.self.prevent
      @mousewheel.self.prevent
      @DOMMouseScroll.self.prevent
      :style="{ '--vm-color': vmColor, '--vm-background': vmBackground }"
    >
      <transition name="slide" appear>
        <div class="vm-sheet--sheet" @click.prevent.stop>
          <div class="vm-sheet--sheet__close-button" v-if="closeButton">
            <VMMenuButton icon="cross" :filled="true" @click="close" />
          </div>
          <div class="vm-sheet--sheet__head" v-if="title || $slots.head">
            <slot name="head">
              <div class="vm-sheet--shett__head--title">{{ title }}</div>
            </slot>
          </div>

          <div class="vm-sheet--sheet__content">
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import VMBgProp from '@/vuement/mixins/VMBackgroundProp.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';
import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import VMMenuButton from '../menuButton/VMMenuButton.vue';

@Component({
  components: {
    VMMenuButton,
  },
})
export default class VMSheet extends Mixins(VMCProp, VMBgProp) {
  @Prop() title!: string;
  @Prop() value!: boolean;
  @Prop({ default: true }) closeable!: boolean;
  @Prop({ default: true }) closeButton!: boolean;

  public visible = !!this.value;

  mounted(): void {
    this.$on('close', this.close);
  }

  @Watch('value', { immediate: true })
  valueChanged(): void {
    this.visible = !!this.value;
  }

  @Watch('visible', { immediate: true })
  visibleChanged(): void {
    this.$emit('input', this.visible);
  }

  public close(): void {
    if (this.closeable) this.visible = false;
  }
}
</script>

<style lang="scss" scoped>
.vm-sheet {
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

  color: rgba(var(--vm-color), 1);

  &--sheet {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 90vw;
    max-width: 400px;
    border-radius: 39px 39px 0 0;
    background: rgba(var(--vm-background), 1);
    max-height: calc(90vh - 10vw);
    overflow: auto;

    padding: 20px 5vw;

    @supports (-webkit-touch-callout: none) {
      padding-bottom: env(safe-area-inset-bottom);
    }

    &__head,
    &__content {
      position: relative;
    }

    &__head {
      .vm-sheet--shett__head--title {
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
}

.appear-enter,
.appear-leave-to {
  opacity: 0;
}
.appear-enter-active,
.appear-leave-active {
  transition: 0.3s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  transform: translate(-50%, 100%);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease-in-out;
}
</style>
