import _Vue from 'vue';
import VMTitle from './VMTitle.vue';

const vmTitle = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmTitle', VMTitle);
  },
};

export default vmTitle;
