import _Vue, { PluginFunction } from 'vue';
import VMButton from './VMButton.vue';

export const vmButton: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmButton', VMButton);
};
