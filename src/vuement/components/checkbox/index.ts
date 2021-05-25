import _Vue from 'vue';
import VMCheckbox from './VMCheckbox.vue';

const vmCheckbox = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmCheckbox', VMCheckbox);
  },
};

export default vmCheckbox;
