import _Vue, { PluginFunction } from 'vue';
import VMGrid from './VMGrid.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmGrid', VMGrid);
};

export default install;
