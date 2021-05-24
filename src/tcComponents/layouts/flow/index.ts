import _Vue from 'vue';
import TLFlow from './TLFlow.vue';

const tlFlow = {
  install(Vue: typeof _Vue): void {
    Vue.component('tlFlow', TLFlow);
  },
};

export default tlFlow;
