import _Vue from 'vue';
import VMHero from './VMHero.vue';

const vmHero = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmHero', VMHero);
  },
};

export default vmHero;
