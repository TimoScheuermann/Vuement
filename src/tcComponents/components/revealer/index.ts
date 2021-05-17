import { VueConstructor } from 'vue';
import TCRevealer from './TCRevealer.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcRevealer', TCRevealer);
};
