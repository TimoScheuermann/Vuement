import _Vue, { PluginFunction } from 'vue';
import VMButton from './VMButton.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmButton', VMButton);
};

export default install;
