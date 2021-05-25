import _Vue from 'vue';
import VMSheet from './VMSheet.vue';
import VMSheetItem from './VMSheetItem.vue';

const vmSheet = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmSheet', VMSheet);
    Vue.component('vmSheetItem', VMSheetItem);
  },
};

export default vmSheet;
