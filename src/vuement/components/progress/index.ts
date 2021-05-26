import _Vue, { PluginFunction } from 'vue';
import VMProgress from './VMProgress.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmProgress', VMProgress);
};

export default install;
