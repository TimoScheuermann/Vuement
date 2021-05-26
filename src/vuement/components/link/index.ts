import _Vue, { PluginFunction } from 'vue';
import VMLink from './VMLink.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmLink', VMLink);
};

export default install;
