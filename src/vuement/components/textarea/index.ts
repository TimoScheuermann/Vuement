import _Vue, { PluginFunction } from 'vue';
import VMTextarea from './VMTextarea.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmTextarea', VMTextarea);
};

export default install;
