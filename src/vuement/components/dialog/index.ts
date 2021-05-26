import _Vue, { PluginFunction } from 'vue';
import VMDialog from './VMDialog.vue';
import VMDialogButton from './VMDialogButton.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmDialog', VMDialog);
  Vue.component('vmDialogButton', VMDialogButton);
};

export default install;
