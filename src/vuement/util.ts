import tinycolor from 'tinycolor2';
import Vue from 'vue';
import { colors, themes, VMTheme } from './options';

// eslint-disable-next-line
export const NOOP = () => {};

export interface LooseObject {
  // eslint-disable-next-line
  [key: string]: any;
}

export function getColor(color: string | null | undefined): string {
  const vm = Vue.prototype.$vm;
  let c: Record<string, string> = {};
  if (!vm || !vm.colors) {
    c = colors;
  } else {
    c = vm.colors;
  }
  color = (color || '').toLowerCase();

  if (Object.keys(c).includes(color)) {
    return c[color];
  }
  return tinycolor(color).toHexString();
}

export function colorLuminance(color: string, luminosity: number): string {
  return tinycolor(color)
    [luminosity < 0 ? 'darken' : 'lighten'](Math.abs(luminosity))
    .toHexString();
}

export function getContainerPosition(
  container: Vue | Element | Vue[] | Element[]
): 'tl' | 'tr' | 'bl' | 'br' {
  if (!container) return 'bl';
  container = container as HTMLElement;
  const rect = container.getBoundingClientRect();
  // const rectBody = document.body.getBoundingClientRect();
  // const d = document.get
  const aboveTopHalf = window.innerHeight / 2 > rect.top - rect.height / 2;
  const aboveRightHalf = window.innerWidth / 2 > rect.left - rect.width / 2;

  if (aboveRightHalf && aboveTopHalf) {
    return 'tl';
  }
  if (!aboveRightHalf && aboveTopHalf) {
    return 'tr';
  }
  if (aboveRightHalf && !aboveTopHalf) {
    return 'bl';
  }
  return 'br';
}

export function convertStyles(styles: (string | null)[]): string | null {
  const style = styles.filter((x) => !!x).join('');
  return style.length > 0 ? style : null;
}

export function setColor(name: string, color: string): void {
  const vm = Vue.prototype.$vm;
  if (!vm || !vm.colors) {
    vm.colors = {};
  }

  console.log('changeing color ' + name + ' to', color);
  vm.colors[name] = color;
}

export function setTheme(name = 'light'): void {
  const vm = Vue.prototype.$vm;

  let t: VMTheme[] = [];
  if (!vm || !vm.themes || vm.themes.length === 0) {
    t = themes;
  } else {
    t = vm.themes;
  }

  const theme =
    t.filter((x) => x.name.toLowerCase() === name.toLowerCase())[0] ||
    themes[0];

  console.log('setting theme to', theme.name);

  Object.entries(theme).forEach(([key, value]) => {
    if (key !== 'name') {
      document.documentElement.style.setProperty('--vm-' + key, value);
      document.documentElement.style.setProperty(key, value);
    }
  });
}
