import _Vue from 'vue';
import VMFlow from './VMFlow.vue';

const vmFlow = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmFlow', VMFlow);
  },
};

export default vmFlow;
