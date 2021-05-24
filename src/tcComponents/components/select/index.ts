import _Vue from 'vue';
import TCSelect from './TCSelect.vue';
import TCSelectItem from './TCSelectItem.vue';

const tcSelect = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcSelect', TCSelect);
    Vue.component('tcSelectItem', TCSelectItem);
  },
};

export default tcSelect;
