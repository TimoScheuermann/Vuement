import _Vue from 'vue';
import TCTextarea from './TCTextarea.vue';

const tcTextarea = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcTextarea', TCTextarea);
  },
};

export default tcTextarea;
