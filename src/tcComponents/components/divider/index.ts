import { VueConstructor } from 'vue';
import TCDivider from './TCDivider.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcDivider', TCDivider);
};
