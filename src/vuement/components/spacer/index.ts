import _Vue, { PluginFunction } from 'vue';
import VMSpacer from './VMSpacer.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmSpacer', VMSpacer);
};

export default install;
