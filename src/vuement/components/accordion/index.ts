import { VMOptions } from '@/vuement/dev/interfaces';
import _Vue, { PluginFunction } from 'vue';
import VMAccordion from './VMAccordion.vue';
import VMAccordionItem from './VMAccordionItem.vue';

const install: PluginFunction<VMOptions> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmAccordion', VMAccordion);
  Vue.component('vmAccordionItem', VMAccordionItem);
};

export default install;
