import { VueConstructor } from 'vue';
import { TCOptions } from './options';

export default (Vue: VueConstructor, options: TCOptions): void => {
  Vue.prototype.$tc = options;
};
