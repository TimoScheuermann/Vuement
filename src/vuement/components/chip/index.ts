import _Vue, { PluginFunction } from 'vue';
import VMChip from './VMChip.vue';
import VMChipWrapper from './VMChipWrapper.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmChip', VMChip);
  Vue.component('vmChipWrapper', VMChipWrapper);
};

export default install;
