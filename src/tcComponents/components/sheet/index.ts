import { VueConstructor } from 'vue';
import TCSheet from './TCSheet.vue';
import TCSheetItem from './TCSheetItem.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcSheet', TCSheet);
  vue.component('tcSheetItem', TCSheetItem);
};
