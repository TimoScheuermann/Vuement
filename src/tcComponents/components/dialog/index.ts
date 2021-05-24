import _Vue from 'vue';
import TCDialog from './TCDialog.vue';
import TCDialogButton from './TCDialogButton.vue';

const tcDialog = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcDialog', TCDialog);
    Vue.component('tcDialogButton', TCDialogButton);
  },
};

export default tcDialog;
