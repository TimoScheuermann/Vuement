import _Vue from 'vue';
import VMSlider from './VMSlider.vue';

const vmSlider = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmSlider', VMSlider);
  },
};

export default vmSlider;
