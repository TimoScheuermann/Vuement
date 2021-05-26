import _Vue, { PluginFunction } from 'vue';
import VMImage from './VMImage.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmImage', VMImage);
};

export default install;
