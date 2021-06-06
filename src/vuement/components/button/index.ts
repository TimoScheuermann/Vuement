import { LooseObject } from '@/vuement/dev/interfaces';
import _Vue, { PluginFunction } from 'vue';
import { VMOptions } from 'vuement';
import VMButton from './VMButton.vue';

(VMButton as LooseObject).install = (Vue: typeof _Vue) => {
  Vue.component('vmButton', VMButton);
};

export default VMButton as unknown as PluginFunction<VMOptions>;
