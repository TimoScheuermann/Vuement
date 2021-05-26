import _Vue, { PluginFunction } from 'vue';
import VMList from './VMList.vue';
import VMListItem from './VMListItem.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmList', VMList);
  Vue.component('vmListItem', VMListItem);
};

export default install;
