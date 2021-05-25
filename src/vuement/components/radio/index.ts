import _Vue from 'vue';
import VMRadio from './VMRadio.vue';

const vmRadio = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmRadio', VMRadio);
  },
};

export default vmRadio;
