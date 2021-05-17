import { VueConstructor } from 'vue';
import TCAction from './TCAction.vue';
import TCActionItem from './TCActionItem.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcAction', TCAction);
  vue.component('tcActionItem', TCActionItem);
};
