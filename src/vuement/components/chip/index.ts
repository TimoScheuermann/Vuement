import _Vue from 'vue';
import VMChip from './VMChip.vue';
import VMChipWrapper from './VMChipWrapper.vue';

const vmChip = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmChip', VMChip);
    Vue.component('vmChipWrapper', VMChipWrapper);
  },
};

export default vmChip;
