import _Vue, { PluginFunction } from 'vue';
import VMSheet from './VMSheet.vue';
import VMSheetItem from './VMSheetItem.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmSheet', VMSheet);
  Vue.component('vmSheetItem', VMSheetItem);
};

export default install;
