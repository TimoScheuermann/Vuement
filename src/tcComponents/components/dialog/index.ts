import { VueConstructor } from 'vue';
import TCDialog from './TCDialog.vue';
import TCDialogButton from './TCDialogButton.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcDialog', TCDialog);
  vue.component('tcDialogButton', TCDialogButton);
};
