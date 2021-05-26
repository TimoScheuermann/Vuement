import _Vue, { PluginFunction } from 'vue';
import VMFlow from './VMFlow.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmFlow', VMFlow);
};

export default install;
