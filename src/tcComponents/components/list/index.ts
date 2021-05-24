import _Vue from 'vue';
import TCList from './TCList.vue';
import TCListItem from './TCListItem.vue';

const tcList = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcList', TCList);
    Vue.component('tcListItem', TCListItem);
  },
};

export default tcList;
