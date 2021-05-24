import _Vue from 'vue';
import TCSpinner from './TCSpinner.vue';

const tcSpinner = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcSpinner', TCSpinner);
  },
};

export default tcSpinner;
