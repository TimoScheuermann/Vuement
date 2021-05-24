import _Vue from 'vue';
import TCSpacer from './TCSpacer.vue';

const tcSpacer = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcSpacer', TCSpacer);
  },
};

export default tcSpacer;
