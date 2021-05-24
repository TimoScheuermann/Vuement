import _Vue from 'vue';
import TCSidebar from './TCSidebar.vue';
import TCSidebarGroup from './TCSidebarGroup.vue';
import TCSidebarItem from './TCSidebarItem.vue';

const tcSidebar = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcSidebar', TCSidebar);
    Vue.component('tcSidebarGroup', TCSidebarGroup);
    Vue.component('tcSidebarItem', TCSidebarItem);
  },
};

export default tcSidebar;
