import _Vue from 'vue';
import VMRevealer from './VMRevealer.vue';

const vmRevealer = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmRevealer', VMRevealer);
  },
};

export default vmRevealer;
