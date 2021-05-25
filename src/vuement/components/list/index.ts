import _Vue from 'vue';
import VMList from './VMList.vue';
import VMListItem from './VMListItem.vue';

const vmList = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmList', VMList);
    Vue.component('vmListItem', VMListItem);
  },
};

export default vmList;
