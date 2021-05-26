import _Vue, { PluginFunction } from 'vue';
import VMRevealer from './VMRevealer.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmRevealer', VMRevealer);
};

export default install;
