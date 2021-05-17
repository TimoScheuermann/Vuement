import { VueConstructor } from 'vue';
import TCFlow from './TCFlow.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcFlow', TCFlow);
};
