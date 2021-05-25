import _Vue from 'vue';
import VMSpinner from './VMSpinner.vue';

const vmSpinner = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmSpinner', VMSpinner);
  },
};

export default vmSpinner;
