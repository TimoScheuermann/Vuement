import { VueConstructor } from 'vue';
import { VMOptions } from './options';
import { setColor, setTheme } from './util';

export default (Vue: VueConstructor, options: VMOptions): void => {
  Vue.prototype.$vm = options;
  Vue.prototype.$vm.setTheme = setTheme;
  Vue.prototype.$vm.setColor = setColor;
};
