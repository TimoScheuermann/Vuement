import { VueConstructor } from 'vue';
import TCSwitch from './TCSwitch.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcSwitch', TCSwitch);
};
