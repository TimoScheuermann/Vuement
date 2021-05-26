import _Vue, { PluginFunction } from 'vue';
import VMSidebar from './VMSidebar.vue';
import VMSidebarGroup from './VMSidebarGroup.vue';
import VMSidebarItem from './VMSidebarItem.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmSidebar', VMSidebar);
  Vue.component('vmSidebarGroup', VMSidebarGroup);
  Vue.component('vmSidebarItem', VMSidebarItem);
};

export default install;
