import { VueConstructor } from 'vue';
import TCSelect from './TCSelect.vue';
import TCSelectItem from './TCSelectItem.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcSelect', TCSelect);
  vue.component('tcSelectItem', TCSelectItem);
};
