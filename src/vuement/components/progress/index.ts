import _Vue from 'vue';
import VMProgress from './VMProgress.vue';

const vmProgress = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmProgress', VMProgress);
  },
};

export default vmProgress;
