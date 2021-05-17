import { VueConstructor } from 'vue';
import TCCheckbox from './TCCheckbox.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcCheckbox', TCCheckbox);
};
