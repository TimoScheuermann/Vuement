import { VueConstructor } from 'vue';
import TCRadio from './TCRadio.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcRadio', TCRadio);
};
