import _Vue from 'vue';
import VMAction from './VMAction.vue';
import VMActionItem from './VMActionItem.vue';

const vmAction = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmAction', VMAction);
    Vue.component('vmActionItem', VMActionItem);
  },
};

export default vmAction;
