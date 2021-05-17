import { VueConstructor } from 'vue';
import TCChip from './TCChip.vue';
import TCChipWrapper from './TCChipWrapper.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcChip', TCChip);
  vue.component('tcChipWrapper', TCChipWrapper);
};
