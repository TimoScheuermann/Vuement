import _Vue from 'vue';
import VMSidebar from './VMSidebar.vue';
import VMSidebarGroup from './VMSidebarGroup.vue';
import VMSidebarItem from './VMSidebarItem.vue';

const vmSidebar = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmSidebar', VMSidebar);
    Vue.component('vmSidebarGroup', VMSidebarGroup);
    Vue.component('vmSidebarItem', VMSidebarItem);
  },
};

export default vmSidebar;
