import _Vue from 'vue';
import TCQuote from './TCQuote.vue';

const tcQuote = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcQuote', TCQuote);
  },
};

export default tcQuote;
