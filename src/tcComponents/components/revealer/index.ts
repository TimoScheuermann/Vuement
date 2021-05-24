import _Vue from 'vue';
import TCRevealer from './TCRevealer.vue';

const tcRevealer = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcRevealer', TCRevealer);
  },
};

export default tcRevealer;
