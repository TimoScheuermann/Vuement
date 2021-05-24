import _Vue from 'vue';
import TCProgress from './TCProgress.vue';

const tcProgress = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcProgress', TCProgress);
  },
};

export default tcProgress;
