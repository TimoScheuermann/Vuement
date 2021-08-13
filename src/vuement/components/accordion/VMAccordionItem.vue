<template>
  <li class="vm-accordion-item">
    <button @click="innerVal = !innerVal">
      <slot name="title">
        <div class="vm-accordion-item__title">{{ title }}</div>
      </slot>

      <svg v-if="$slots.default" viewBox="0 0 17 8.85" height="8.85" width="17">
        <polyline
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          fill-rule="evenodd"
          points="15 1.13 8.5 7.72 2 1.13"
        >
          <animate
            ref="expand"
            attributeName="points"
            values="15 1.13 8.5 7.72 2 1.13; 15.85 4.42 8.5 4.42 1.15 4.42; 15 7.72 8.5 1.13 2 7.72"
            dur="320ms"
            begin="indefinite"
            fill="freeze"
            keyTimes="0; 0.5; 1"
            calcMode="spline"
            keySplines="0.12, 0, 0.38, 0; 0.2, 1, 0.68, 1"
          />
          <animate
            ref="collapse"
            attributeName="points"
            values="15 7.72 8.5 1.13 2 7.72; 15.85 4.42 8.5 4.42 1.15 4.42; 15 1.13 8.5 7.72 2 1.13"
            dur="320ms"
            begin="indefinite"
            fill="freeze"
            keyTimes="0; 0.5; 1"
            calcMode="spline"
            keySplines="0.2, 0, 0.68, 0; 0.2, 1, 0.68, 1"
          />
        </polyline>
      </svg>
    </button>

    <VMRevealer>
      <div v-if="innerVal">
        <div class="vm-accordion-item__content">
          <slot />
        </div>
      </div>
    </VMRevealer>
  </li>
</template>

<script lang="ts">
import { LooseObject } from '@/vuement/dev/interfaces';
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import VMRevealer from '../revealer/VMRevealer.vue';

@Component<VMAccordionItem>({
  name: 'vmAccordionItem',
  components: {
    VMRevealer,
  },
})
export default class VMAccordionItem extends Vue {
  @Prop() title!: string;
  @Prop() value!: boolean;

  $refs!: {
    expand: SVGAnimateElement;
    collapse: SVGAnimateElement;
  };

  public innerVal = !!this.value;

  @Watch('value', { immediate: true })
  valueChanged(): void {
    this.innerVal = !!this.value;
  }

  @Watch('innerVal', { immediate: true })
  innerValChanged(): void {
    const elem = this.$refs[this.innerVal ? 'expand' : 'collapse'];
    if (elem) {
      (elem as LooseObject).beginElement();
    }

    this.$emit('input', this.innerVal);
  }
}
</script>

<style lang="scss" scoped>
$tb: 0.5em;
$lr: 0.2em;

.vm-accordion-item {
  list-style: none;
  margin: 0;
  padding: 0;

  &__title {
    font-weight: 600;
    font-size: 18px;
    padding: $tb $lr;
    padding-right: 0;
  }

  button {
    @include vm-clickable();

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: inherit;
    cursor: pointer;
    border-bottom: 1px solid rgba(var(--vm-border), 1);

    svg {
      opacity: 0.75;
      stroke-width: 2.25;
      stroke: currentColor;
      margin: 0 $lr;
    }
  }

  &__content {
    padding: 0.75em;
  }
}
</style>
