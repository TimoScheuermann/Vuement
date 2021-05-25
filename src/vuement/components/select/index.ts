import _Vue from 'vue';
import VMSelect from './VMSelect.vue';
import VMSelectItem from './VMSelectItem.vue';

const vmSelect = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmSelect', VMSelect);
    Vue.component('vmSelectItem', VMSelectItem);
  },
};

export default vmSelect;
