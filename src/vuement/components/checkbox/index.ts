import _Vue, { PluginFunction } from 'vue';
import VMCheckbox from './VMCheckbox.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmCheckbox', VMCheckbox);
};

export default install;
