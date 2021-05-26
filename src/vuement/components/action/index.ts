import _Vue, { PluginFunction } from 'vue';
import VMAction from './VMAction.vue';
import VMActionItem from './VMActionItem.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmAction', VMAction);
  Vue.component('vmActionItem', VMActionItem);
};

export default install;
