import _Vue from 'vue';
import TCTable from './TCTable.vue';
import TCTd from './TCTd.vue';
import TCTh from './TCTh.vue';
import TCTr from './TCTr.vue';

const tcTabbar = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcTable', TCTable);
    Vue.component('tcTr', TCTr);
    Vue.component('tcTh', TCTh);
    Vue.component('tcTd', TCTd);
  },
};

export default tcTabbar;
