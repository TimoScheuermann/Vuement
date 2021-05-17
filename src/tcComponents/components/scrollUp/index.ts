import { VueConstructor } from 'vue';
import TCScrollUp from './TCScrollUp.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcScrollUp', TCScrollUp);
};
