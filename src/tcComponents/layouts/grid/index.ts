import { VueConstructor } from 'vue';
import TCGrid from './TCGrid.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcGrid', TCGrid);
};
