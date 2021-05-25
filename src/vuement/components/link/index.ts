import _Vue from 'vue';
import VMLink from './VMLink.vue';

const vmLink = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmLink', VMLink);
  },
};

export default vmLink;
