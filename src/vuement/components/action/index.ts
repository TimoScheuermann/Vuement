import { VMOptions } from '@/vuement/dev/interfaces';
import _Vue, { PluginFunction } from 'vue';
import VMAction from './VMAction.vue';
import VMActionGroup from './VMActionGroup.vue';
import VMActionItem from './VMActionItem.vue';

const install: PluginFunction<VMOptions> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmAction', VMAction);
  Vue.component('vmActionGroup', VMActionGroup);
  Vue.component('vmActionItem', VMActionItem);
};

export default install;
