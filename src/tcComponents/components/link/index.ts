import { VueConstructor } from 'vue';
import TCLink from './TCLink.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcLink', TCLink);
};
