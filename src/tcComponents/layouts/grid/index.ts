import _Vue from 'vue';
import TLGrid from './TLGrid.vue';

const tlGrid = {
  install(Vue: typeof _Vue): void {
    Vue.component('tlGrid', TLGrid);
  },
};

export default tlGrid;
