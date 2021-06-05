import Vue from 'vue';
import { COLORS_DEFAULT, THEMES_DEFAULT, THEME_LIGHT } from './constants';
import { LooseObject, VMNotification, VMTheme } from './interfaces';
import { convertColor, VMBus } from './util';

export function setColor(name: string, hex: string): void {
  const vm = Vue.prototype.$vm;
  if (!vm) return;
  vm.colors[name] = convertColor(hex);
  updateVariables();
}

export function addTheme(name: string, theme: VMTheme, replace = false): void {
  const vm = Vue.prototype.$vm;
  if (!vm) return;
  for (const c in theme) {
    (theme as LooseObject)[c] = convertColor((theme as LooseObject)[c]);
  }
  vm.themes[name] = theme;
  if (replace) setTheme(name);
  updateVariables();
}

export function setTheme(theme: string): void {
  const vm = Vue.prototype.$vm;
  if (!vm) return;
  vm.theme = theme;
  updateVariables();
}

export function getColors(): Record<string, string> {
  const vm = Vue.prototype.$vm;
  return vm && vm.colors ? vm.colors : COLORS_DEFAULT;
}

export function getThemes(): Record<string, VMTheme> {
  const vm = Vue.prototype.$vm;
  if (!vm) return THEMES_DEFAULT;
  return vm.themes;
}

export function getTheme(): VMTheme {
  const vm = Vue.prototype.$vm;
  if (!vm || !vm.theme) return THEME_LIGHT;
  const theme = getThemes()[vm.theme];
  return theme ? theme : THEME_LIGHT;
}

export function updateVariables(): void {
  let elem = document.getElementById('vmstyles');
  if (!elem) {
    elem = document.createElement('style');
    elem.setAttribute('id', 'vmstyles');
    elem.setAttribute('type', 'text/css');
    document.head.appendChild(elem);
  }

  const vars: Record<string, string> = { ...getColors(), ...getTheme() };
  let str = '';

  Object.entries(vars).forEach(([key, value]) => {
    str += `\n\t--vm-${key}: ${value};`;
  });

  elem.innerHTML = `:root {${str}\n}`;
  elem.innerHTML += `
  html {
    color: rgba(var(--vm-color), 1);
    background: rgba(var(--vm-background), 1);
  }`;
}

export function sendNotification(notificiation: VMNotification): void {
  VMBus.$emit('VMNotification', notificiation);
}
