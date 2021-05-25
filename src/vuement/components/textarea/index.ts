import _Vue from 'vue';
import VMTextarea from './VMTextarea.vue';

const vmTextarea = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmTextarea', VMTextarea);
  },
};

export default vmTextarea;
