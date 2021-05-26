import _Vue, { PluginFunction } from 'vue';
import VMScrollUp from './VMScrollUp.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmScrollUp', VMScrollUp);
};

export default install;
