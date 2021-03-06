import { VMOptions } from '@/vuement/dev/interfaces';
import _Vue, { PluginFunction } from 'vue';
import VMNavbar from './VMNavbar.vue';
import VMNavbarItem from './VMNavbarItem.vue';

const install: PluginFunction<VMOptions> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmNavbar', VMNavbar);
  Vue.component('vmNavbarItem', VMNavbarItem);
};

export default install;
