import { VueConstructor } from 'vue';
import TCSlider from './TCSlider.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcSlider', TCSlider);
};
