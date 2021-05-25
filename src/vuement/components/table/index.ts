import _Vue from 'vue';
import VMTable from './VMTable.vue';
import VMTd from './VMTd.vue';
import VMTh from './VMTh.vue';
import VMTr from './VMTr.vue';

const vmTable = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmTable', VMTable);
    Vue.component('vmTd', VMTd);
    Vue.component('vmTh', VMTh);
    Vue.component('vmTr', VMTr);
  },
};

export default vmTable;
