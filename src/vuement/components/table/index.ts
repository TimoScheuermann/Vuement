import _Vue, { PluginFunction } from 'vue';
import VMTable from './VMTable.vue';
import VMTd from './VMTd.vue';
import VMTh from './VMTh.vue';
import VMTr from './VMTr.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmTable', VMTable);
  Vue.component('vmTd', VMTd);
  Vue.component('vmTh', VMTh);
  Vue.component('vmTr', VMTr);
};

export default install;
