/* eslint-disable */
import { DirectiveFunction, DirectiveOptions } from 'vue';
import { DirectiveBinding } from 'vue/types/options';
import { VueConstructor } from 'vue/types/umd';
import { CombinedVueInstance } from 'vue/types/vue';
import VMTooltip from './VMTooltip.vue';

type vmTooltipInstance = CombinedVueInstance<
  VMTooltip,
  Record<string, any>,
  Record<string, any>,
  Record<string, any>,
  Record<never, any>
>;

export interface VMTooltipInstance {
  element: HTMLElement;
  text?: string;
  component?: VueConstructor<Vue>;
  isHtml: boolean;
  tooltip: vmTooltipInstance;
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
  document.body.appendChild(tooltip.$el);

  const instance: VMTooltipInstance = {
    element: el,
    tooltip: tooltip,
    isHtml: Object.keys(modifiers).includes('html'),
  };

  // check if parsed tooltip is a component
  if (typeof value === 'function') instance.component = value;
  // else set tooltip as text
  else instance.text = value;
  tooltips.push(instance);
  tooltip.$props.tooltip = instance;

  if (instance.component) {
    tooltip.$emit('mountComponent');
  }

  window.addEventListener('scroll', () => positionChanged(el));
  requestAnimationFrame(() => {
    positionChanged(el);
  });
  setTimeout(() => {
    positionChanged(el);
  }, 1000);

  el.addEventListener('mouseenter', () => mouseEntered(el));
  el.addEventListener('mouseleave', () => mouseLeft(el));
}

function unregisterTooltip(el: HTMLElement): void {
  window.removeEventListener('scroll', () => positionChanged(el));
  tooltips = tooltips
    .map((x) => {
      if (x.element !== el) return x;
      document.body.removeChild(x.tooltip.$el);
      x.element.removeEventListener('mouseenter', () =>
        mouseEntered(x.element)
      );
      x.element.removeEventListener('mouseleave', () => mouseLeft(x.element));
      return x;
    })
    .filter((x) => x.element === el);
}

function positionChanged(element: HTMLElement): void {
  getTooltip(element).forEach((x) => {
    const { top, left, width } = element.getBoundingClientRect();
    x.$props.top = top;
    x.$props.left = left;
    x.$props.width = width;
  });
}

function mouseEntered(element: HTMLElement): void {
  getTooltip(element).forEach((x) => {
    x.$props.hover = true;
  });
}

function mouseLeft(element: HTMLElement): void {
  getTooltip(element).forEach((x) => {
    setTimeout(() => {
      x.$props.hover = false;
    }, 400);
  });
}

function getTooltip(element: HTMLElement): vmTooltipInstance[] {
  return tooltips.filter((x) => x.element === element).map((x) => x.tooltip);
}
