import { LooseObject } from '@/vuement/util';
import { VueConstructor } from 'vue';
import VMButton from './VMButton.vue';

(VMButton as LooseObject).install = (vue: VueConstructor) => {
  vue.component('vmButton', VMButton);
};
export default VMButton;
