import _Vue, { PluginFunction } from 'vue';
import VMInput from './VMInput.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmInput', VMInput);
};

export default install;
