import _Vue, { PluginFunction } from 'vue';
import VMTitle from './VMTitle.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmTitle', VMTitle);
};

export default install;
