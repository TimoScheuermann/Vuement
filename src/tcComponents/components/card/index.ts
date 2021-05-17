import { VueConstructor } from 'vue';
import TCCard from './TCCard.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcCard', TCCard);
};
