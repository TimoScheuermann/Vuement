import _Vue from 'vue';
import VMDialog from './VMDialog.vue';
import VMDialogButton from './VMDialogButton.vue';

const vmDialog = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmDialog', VMDialog);
    Vue.component('vmDialogButton', VMDialogButton);
  },
};

export default vmDialog;
