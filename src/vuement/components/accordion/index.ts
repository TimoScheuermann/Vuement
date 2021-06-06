import { LooseObject } from '@/vuement/dev/interfaces';
import _Vue, { PluginFunction } from 'vue';
import { VMOptions } from 'vuement';
import VMAccordion from './VMAccordion.vue';
import VMAccordionItem from './VMAccordionItem.vue';

(VMAccordion as LooseObject).install = (Vue: typeof _Vue) => {
  Vue.component('vmAccordion', VMAccordion);
  Vue.component('vmAccordionItem', VMAccordionItem);
};

export default VMAccordion as unknown as PluginFunction<VMOptions>;
