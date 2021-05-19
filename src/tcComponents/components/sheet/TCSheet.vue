<template>
  <transition name="appear" appear :delay="300">
    <div class="tc-sheet" v-if="visible" @click.stop="close" @touchmove.prevent>
      <transition name="slide" appear>
        <div class="tc-sheet--sheet" @click.prevent.stop>
          <div class="tc-sheet--sheet__title" v-if="title">{{ title }}</div>
          <div class="tc-sheet--sheet__items">
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class TCSheet extends Vue {
  @Prop() title!: string;
  @Prop() value!: boolean;

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
    this.visible = false;
  }
}
</script>

<style lang="scss" scoped>
.tc-sheet {
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
  z-index: 200;

  &--sheet {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: calc(90vw);
    max-width: 600px;
    border-radius: 39px 39px 0 0;
    background: var(--tc-background);
    padding: 20px;
    padding: 20px 5vw calc(20px + env(safe-area-inset-bottom)) 5vw;

    &__title {
      font-weight: bold;
      font-size: 26px;
      margin-bottom: 20px;
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
