import { VueConstructor } from 'vue';
import TCProgress from './TCProgress.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcProgress', TCProgress);
};
