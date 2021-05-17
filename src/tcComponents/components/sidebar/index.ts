import { VueConstructor } from 'vue';
import TCSidebar from './TCSidebar.vue';
import TCSidebarGroup from './TCSidebarGroup.vue';
import TCSidebarItem from './TCSidebarItem.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcSidebar', TCSidebar);
  vue.component('tcSidebarGroup', TCSidebarGroup);
  vue.component('tcSidebarItem', TCSidebarItem);
};
