import { VMOptions } from '@/vuement/dev/interfaces';
import _Vue, { PluginFunction } from 'vue';
import VMContainer from './VMContainer.vue';

const install: PluginFunction<VMOptions> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmContainer', VMContainer);
};

export default install;
