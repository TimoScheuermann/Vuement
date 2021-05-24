import _Vue from 'vue';
import TCDivider from './TCDivider.vue';

const tcDivider = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcDivider', TCDivider);
  },
};

export default tcDivider;
