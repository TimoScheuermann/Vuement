import _Vue from 'vue';
import VMScrollUp from './VMScrollUp.vue';

const vmScrollUp = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmScrollUp', VMScrollUp);
  },
};

export default vmScrollUp;
