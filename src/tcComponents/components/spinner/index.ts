import { VueConstructor } from 'vue';
import TCSpinner from './TCSpinner.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcSpinner', TCSpinner);
};
