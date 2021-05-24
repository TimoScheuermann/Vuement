import _Vue from 'vue';
import TCLink from './TCLink.vue';

const tcLink = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcLink', TCLink);
  },
};

export default tcLink;
