import _Vue from 'vue';
import VMDivider from './VMDivider.vue';

const vmDivider = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmDivider', VMDivider);
  },
};

export default vmDivider;
