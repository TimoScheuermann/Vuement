import _Vue from 'vue';
import TCHero from './TCHero.vue';

const tcHero = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcHero', TCHero);
  },
};

export default tcHero;
