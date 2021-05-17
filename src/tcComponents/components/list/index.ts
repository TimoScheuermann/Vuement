import { VueConstructor } from 'vue';
import TCList from './TCList.vue';
import TCListItem from './TCListItem.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcList', TCList);
  vue.component('tcListItem', TCListItem);
};
