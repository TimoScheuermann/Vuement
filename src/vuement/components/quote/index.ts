import _Vue, { PluginFunction } from 'vue';
import VMQuote from './VMQuote.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmQuote', VMQuote);
};

export default install;
