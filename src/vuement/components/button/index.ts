import _Vue from 'vue';
import VMButton from './VMButton.vue';

const vmButton = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmButton', VMButton);
  },
};

export default vmButton;
