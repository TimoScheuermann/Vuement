import _Vue from 'vue';
import TCChip from './TCChip.vue';
import TCChipWrapper from './TCChipWrapper.vue';

const tcChip = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcChip', TCChip);
    Vue.component('tcChipWrapper', TCChipWrapper);
  },
};

export default tcChip;
