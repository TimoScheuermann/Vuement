import { VueConstructor } from 'vue';
import TCImage from './TCImage.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcImage', TCImage);
};
