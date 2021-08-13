<template>
  <VMClickable
    v-if="vmIcon"
    class="vm-menu-button"
    @click="clicked"
    :type="vmMenuButtonType"
    :style="{ '--vm-color': vmColor }"
    :disabled="disabled"
    :href="href"
    :routeName="routeName"
    :to="to"
    fallback="button"
  >
    <component :is="'vm-mb-' + vmIcon" />
  </VMClickable>
</template>

<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';

import VMLinkMixin from '@/vuement/mixins/VMLink.mixin';
import VMCProp from '@/vuement/mixins/VMColorProp.mixin';

import VMMenuButtonPlus from './buttons/VMMenuButtonPlus.vue';
import VMMenuButtonMinus from './buttons/VMMenuButtonMinus.vue';
import VMMenuButtonCross from './buttons/VMMenuButtonCross.vue';
import VMMenuButtonDotsH from './buttons/VMMenuButtonDotsH.vue';
import VMMenuButtonDotsV from './buttons/VMMenuButtonDotsV.vue';
import VMMenuButtonBars from './buttons/VMMenuButtonBars.vue';
import VMClickable from '@/vuement/mixins/VMClickable.vue';

@Component<VMMenuButton>({
  name: 'vmMenuButton',
  components: {
    VMClickable,
    'vm-mb-plus': VMMenuButtonPlus,
    'vm-mb-minus': VMMenuButtonMinus,
    'vm-mb-cross': VMMenuButtonCross,
    'vm-mb-dots-h': VMMenuButtonDotsH,
    'vm-mb-dots-v': VMMenuButtonDotsV,
    'vm-mb-bars': VMMenuButtonBars,
  },
})
export default class VMMenuButton extends Mixins(VMLinkMixin, VMCProp) {
  @Prop({ default: 'plus' }) icon!: string;
  @Prop({ default: true }) border!: boolean;
  @Prop({ default: false }) filled!: boolean;

  get vmIcon(): string | null {
    if (!this.icon) return null;
    const icons = ['plus', 'minus', 'cross', 'bars', 'dots-v', 'dots-h'];
    return icons.includes(this.icon.toLowerCase())
      ? this.icon.toLowerCase()
      : null;
  }

  get vmMenuButtonType(): string {
    if (this.filled) return 'filled';
    if (this.border) return 'border';
    return 'normal';
  }
}
</script>

<style lang="scss">
.vm-menu-button {
  @include vm-clickable();

  display: inline-grid;
  place-content: center;

  border-radius: 1em;
  height: 1em;
  width: 1em;

  svg {
    height: inherit;
    width: inherit;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
    filter: saturate(25%);
  }

  transition: 0.2s ease-in-out;

  &:not([disabled]) {
    cursor: pointer;
    opacity: 0.75;
    &:hover {
      opacity: 1;
    }
    &:active {
      transform: scale(0.9);
    }
  }

  fill: rgba(var(--vm-color), 1);

  &[type='filled'] {
    #icon,
    #border {
      display: none;
    }
  }
  &[type='border'] {
    #background {
      display: none;
    }
  }
  &[type='normal'] {
    #background,
    #border {
      display: none;
    }
  }
}
</style>
