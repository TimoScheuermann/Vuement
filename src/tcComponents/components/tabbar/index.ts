import { VueConstructor } from 'vue';
import TCTabbar from './TCTabbar.vue';
import TCTabbarItem from './TCTabbarItem.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcTabbar', TCTabbar);
  vue.component('tcTabbarItem', TCTabbarItem);
};
