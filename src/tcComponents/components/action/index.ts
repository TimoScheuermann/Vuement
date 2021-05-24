import _Vue from 'vue';
import TCAction from './TCAction.vue';
import TCActionItem from './TCActionItem.vue';

const tcAction = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcAction', TCAction);
    Vue.component('tcActionItem', TCActionItem);
  },
};

export default tcAction;
