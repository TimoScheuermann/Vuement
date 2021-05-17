import { VueConstructor } from 'vue';
import TCTitle from './TCTitle.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcTitle', TCTitle);
};
