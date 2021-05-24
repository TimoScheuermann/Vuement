import _Vue from 'vue';
import TCSlider from './TCSlider.vue';

const tcSlider = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcSlider', TCSlider);
  },
};

export default tcSlider;
