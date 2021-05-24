import _Vue from 'vue';
import TCButton from './TCButton.vue';

const tcButton = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcButton', TCButton);
  },
};

export default tcButton;
