import _Vue, { PluginFunction } from 'vue';
import VMDivider from './VMDivider.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmDivider', VMDivider);
};

export default install;
