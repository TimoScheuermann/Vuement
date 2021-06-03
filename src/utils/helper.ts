import store from '@/store';
import Vue from 'vue';

export function setDarkmode(): void {
  const vm = Vue.prototype.$vm;
  vm.setTheme('dark');
  store.commit('dark', true);
}

export function setLightmode(): void {
  const vm = Vue.prototype.$vm;
  vm.setTheme('light');
  store.commit('dark', false);
}
