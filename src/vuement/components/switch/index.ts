import _Vue from 'vue';
import VMSwitch from './VMSwitch.vue';

const vmSwitch = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmSwitch', VMSwitch);
  },
};

export default vmSwitch;
