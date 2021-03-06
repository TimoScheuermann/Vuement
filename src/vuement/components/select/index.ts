import { VMOptions } from '@/vuement/dev/interfaces';
import _Vue, { PluginFunction } from 'vue';
import VMSelect from './VMSelect.vue';
import VMSelectItem from './VMSelectItem.vue';

const install: PluginFunction<VMOptions> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmSelect', VMSelect);
  Vue.component('vmSelectItem', VMSelectItem);
};

export default install;
