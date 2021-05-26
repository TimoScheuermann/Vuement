import _Vue, { PluginFunction } from 'vue';
import VMSlider from './VMSlider.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmSlider', VMSlider);
};

export default install;