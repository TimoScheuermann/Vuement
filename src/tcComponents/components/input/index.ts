import _Vue from 'vue';
import TCInput from './TCInput.vue';

const tcInput = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcInput', TCInput);
  },
};

export default tcInput;
