import { VueConstructor } from 'vue/types/umd';
import { TCOptions } from '../options';
import { LooseObject } from '../util';

export default (vue: VueConstructor, options: TCOptions): void => {
  vue.mixin({
    beforeCreate(): void {
      if (!(this as LooseObject).$tc) {
        (this as LooseObject).$tc = vue.observable(options);
      }
    },
  });
};
