import { VueConstructor } from 'vue';
import TCSpacer from './TCSpacer.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcSpacer', TCSpacer);
};
