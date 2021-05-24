import _Vue from 'vue';
import TCSwitch from './TCSwitch.vue';

const tcSwitch = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcSwitch', TCSwitch);
  },
};

export default tcSwitch;
