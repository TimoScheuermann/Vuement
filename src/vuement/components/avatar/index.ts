import _Vue, { PluginFunction } from 'vue';
import VMAvatar from './VMAvatar.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmAvatar', VMAvatar);
};

export default install;
