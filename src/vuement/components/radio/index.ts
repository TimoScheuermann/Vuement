import _Vue, { PluginFunction } from 'vue';
import VMRadio from './VMRadio.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmRadio', VMRadio);
};

export default install;
