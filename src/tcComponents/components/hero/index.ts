import { VueConstructor } from 'vue';
import TCHero from './TCHero.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcHero', TCHero);
};
