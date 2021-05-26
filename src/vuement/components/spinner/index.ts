import _Vue, { PluginFunction } from 'vue';
import VMSpinner from './VMSpinner.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmSpinner', VMSpinner);
};

export default install;
