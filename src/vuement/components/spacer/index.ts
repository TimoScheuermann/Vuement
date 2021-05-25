import _Vue from 'vue';
import VMSpacer from './VMSpacer.vue';

const vmSpacer = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmSpacer', VMSpacer);
  },
};

export default vmSpacer;
