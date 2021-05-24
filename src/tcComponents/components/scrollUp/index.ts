import _Vue from 'vue';
import TCScrollUp from './TCScrollUp.vue';

const tcScrollUp = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcScrollUp', TCScrollUp);
  },
};

export default tcScrollUp;
