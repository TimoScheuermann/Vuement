import _Vue from 'vue';
import TCRadio from './TCRadio.vue';

const tcRadio = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcRadio', TCRadio);
  },
};

export default tcRadio;
