import _Vue from 'vue';
import TCCheckbox from './TCCheckbox.vue';

const tcCheckbox = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcCheckbox', TCCheckbox);
  },
};

export default tcCheckbox;
