import { LooseObject } from '@/vuement/util';
import { VueConstructor } from 'vue/types/umd';
import VMSidebar from './VMSidebar.vue';
import VMSidebarGroup from './VMSidebarGroup.vue';
import VMSidebarItem from './VMSidebarItem.vue';

(VMSidebar as LooseObject).install = (vue: VueConstructor) => {
  vue.component('vmSidebar', VMSidebar);
  vue.component('vmSidebarGroup', VMSidebarGroup);
  vue.component('vmSidebarItem', VMSidebarItem);
};

export default VMSidebar;
