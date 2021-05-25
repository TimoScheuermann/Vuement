import _Vue from 'vue';
import VMQuote from './VMQuote.vue';

const vmQuote = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmQuote', VMQuote);
  },
};

export default vmQuote;
