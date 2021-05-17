import { VueConstructor } from 'vue';
import TCInput from './TCInput.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcInput', TCInput);
};
