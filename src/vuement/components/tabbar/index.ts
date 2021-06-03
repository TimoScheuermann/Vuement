import { VMOptions } from '@/vuement/dev/interfaces';
import _Vue, { PluginFunction } from 'vue';
import VMTabbar from './VMTabbar.vue';
import VMTabbarItem from './VMTabbarItem.vue';

const install: PluginFunction<VMOptions> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmTabbar', VMTabbar);
  Vue.component('vmTabbarItem', VMTabbarItem);
};

export default install;
