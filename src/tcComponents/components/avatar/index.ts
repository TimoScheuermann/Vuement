import { VueConstructor } from 'vue';
import TCAvatar from './TCAvatar.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcAvatar', TCAvatar);
};
