import { VueConstructor } from 'vue';
import TCTextarea from './TCTextarea.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcTextarea', TCTextarea);
};
