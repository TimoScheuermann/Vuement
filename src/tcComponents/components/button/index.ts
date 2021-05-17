import { VueConstructor } from 'vue';
import TCButton from './TCButton.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcButton', TCButton);
};
