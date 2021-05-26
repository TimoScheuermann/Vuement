import _Vue, { PluginFunction } from 'vue';
import VMCard from './VMCard.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmCard', VMCard);
};

export default install;
