/* eslint-disable */
import { DirectiveFunction, DirectiveOptions } from 'vue';
import { DirectiveBinding } from 'vue/types/options';
import { VueConstructor } from 'vue/types/umd';
import { CombinedVueInstance } from 'vue/types/vue';
import VMTooltip from './VMTooltip.vue';

export interface VMTooltipInstance {
  element: HTMLElement;
  text?: string;
  isHtml: boolean;
  component?: VueConstructor<Vue>;
  tooltip: CombinedVueInstance<
    VMTooltip,
    Record<string, any>,
    Record<string, any>,
    Record<string, any>,
    Record<never, any>
  >;
}

export const VMTooltipDirective: DirectiveOptions | DirectiveFunction = {
  bind: (el: HTMLElement, binding: DirectiveBinding) => {
    registerTooltip(el, binding);
  },
  unbind: (el: HTMLElement) => {
    unregisterTooltip(el);
  },
};

let tooltips: VMTooltipInstance[] = [];

function registerTooltip(el: HTMLElement, binding: DirectiveBinding): void {
  const { value, modifiers } = binding;

  const tooltip = new VMTooltip();
  tooltip.$mount();

  const instance: VMTooltipInstance = {
    element: el,
    tooltip: tooltip,
    isHtml: Object.keys(modifiers).includes('html'),
  };

  if (typeof value === 'function') instance.component = value;
  else instance.text = value;
  tooltips.push(instance);

  console.log('binded tooltip to ', el, binding);
  // window.addEventListener('scroll', (ev) => positionChanged(ev, el));
}

function unregisterTooltip(el: HTMLElement): void {
  console.log('unbinding tooltip from ', el);
  // window.removeEventListener('scroll', (ev) => positionChanged(ev, el));
  tooltips = tooltips.filter((x) => x.element === el);
}

// function positionChanged(event: Event, element: HTMLElement): void {
//
// }
