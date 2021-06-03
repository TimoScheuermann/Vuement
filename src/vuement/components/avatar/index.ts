import { VMOptions } from '@/vuement/dev/interfaces';
import _Vue, { PluginFunction } from 'vue';
import VMAvatar from './VMAvatar.vue';
import VMAvatarGroup from './VMAvatarGroup.vue';

const install: PluginFunction<VMOptions> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmAvatar', VMAvatar);
  Vue.component('vmAvatarGroup', VMAvatarGroup);
};

export default install;
