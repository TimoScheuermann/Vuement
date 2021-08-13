<template>
  <span
    ref="tooltip"
    :style="{
      '--vm-top': top + 'px',
      '--vm-left': left + 'px',
      '--vm-width': width + 'px',
    }"
  >
    <transition name="appear">
      <div class="vm-tooltip" v-if="(hover || mouseOver) && tooltip">
        <div class="vm-tooltip__content" v-if="tooltip.text">
          <span v-if="tooltip.isHtml" v-html="tooltip.text" />
          <span v-else v-text="tooltip.text" />
        </div>
        <div class="vm-tooltip__custom" v-if="tooltip.component" ref="comp" />
      </div>
    </transition>
  </span>
</template>

<script lang="ts">
import router from '@/router';
import store from '@/store';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { VMTooltipInstance } from './VMTooltip';

@Component<VMTooltip>({
  name: 'vmTooltip',
})
export default class VMTooltip extends Vue {
  @Prop() tooltip!: VMTooltipInstance;
  @Prop() top!: number;
  @Prop() left!: number;
  @Prop() width!: number;
  @Prop() hover!: boolean;

  $refs!: {
    comp: HTMLDivElement;
    tooltip: HTMLSpanElement;
  };

  public mouseOver = false;

  mounted(): void {
    this.$refs.tooltip.addEventListener('mouseenter', this.mouseEnter);
    this.$refs.tooltip.addEventListener('mouseleave', this.mouseLeave);
  }

  beforeDestroy(): void {
    this.$refs.tooltip.removeEventListener('mouseenter', this.mouseEnter);
    this.$refs.tooltip.removeEventListener('mouseleave', this.mouseLeave);
  }

  public mouseEnter(): void {
    this.mouseOver = true;
  }

  public mouseLeave(): void {
    this.mouseOver = false;
  }

  @Watch('hover', { immediate: true })
  hoverChanged(): void {
    if (this.hover && this.tooltip && this.tooltip.component) {
      setTimeout(() => {
        const { component } = this.tooltip;
        if (component) {
          const ComponentClass = Vue.extend(component);
          const instance = new ComponentClass({ store: store, router: router });

          instance.$mount();
          this.$refs.comp.appendChild(instance.$el);
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.vm-tooltip {
  position: fixed;

  z-index: 100;
  top: var(--vm-top);
  left: calc(var(--vm-left) + var(--vm-width) / 2);
  transform: translate(-50%, calc(-100% + 5px));

  .vm-tooltip__custom {
    position: relative;
  }

  .vm-tooltip__content {
    background: rgba(var(--vm-primary), 1);
    color: #fff;
    padding: 5px 10px;
    border-radius: 200px;
    font-size: 0.8em;
    position: relative;

    &::before {
      content: '';
      transition: 0.2s ease-in-out;
      position: absolute;
      bottom: 0;
      left: 33%;

      transform: translate(0%, 50%) rotate(-90deg);
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 7.5px 12px 7.5px 0;
      border-color: transparent rgba(var(--vm-primary), 1) transparent
        transparent;
    }
  }
}

.appear-enter,
.appear-leave-to {
  opacity: 0;
  transform: translate(-50%, calc(-100% + 7.5px)) scale(0.5);
  .vm-tooltip__content::before {
    transform: translate(0%, 50%) rotate(-90deg) scaleX(0);
  }
}

.appear-leave-active,
.appear-enter-active {
  transition: 0.2s ease-in-out;
}
</style>
