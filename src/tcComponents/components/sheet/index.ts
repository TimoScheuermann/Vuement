import _Vue from 'vue';
import TCSheet from './TCSheet.vue';
import TCSheetItem from './TCSheetItem.vue';

const tcSheet = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcSheet', TCSheet);
    Vue.component('tcSheetItem', TCSheetItem);
  },
};

export default tcSheet;
