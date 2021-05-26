import _Vue, { PluginFunction } from 'vue';
import VMSwitch from './VMSwitch.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmSwitch', VMSwitch);
};

export default install;
