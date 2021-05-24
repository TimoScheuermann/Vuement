import _Vue from 'vue';
import TCTitle from './TCTitle.vue';

const tcTitle = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcTitle', TCTitle);
  },
};

export default tcTitle;
