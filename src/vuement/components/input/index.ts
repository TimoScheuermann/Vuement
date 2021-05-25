import _Vue from 'vue';
import VMInput from './VMInput.vue';

const vmInput = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmInput', VMInput);
  },
};

export default vmInput;
