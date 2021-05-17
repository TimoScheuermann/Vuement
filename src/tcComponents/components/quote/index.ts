import { VueConstructor } from 'vue';
import TCQuote from './TCQuote.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcQuote', TCQuote);
};
