import _Vue from 'vue';
import VMGrid from './VMGrid.vue';

const vmGrid = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmGrid', VMGrid);
  },
};

export default vmGrid;
