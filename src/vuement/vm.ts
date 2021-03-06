import { VueConstructor } from 'vue';
import {
  addTheme,
  closeAllNotifications,
  closeNotification,
  sendNotification,
  setColor,
  setTheme,
} from './dev/functions';
import { VMOptions } from './dev/interfaces';

export default (Vue: VueConstructor, options: VMOptions): void => {
  Vue.prototype.$vm = options;
  Vue.prototype.$vm.setTheme = setTheme;
  Vue.prototype.$vm.setColor = setColor;
  Vue.prototype.$vm.addTheme = addTheme;
  Vue.prototype.$vm.sendNotification = sendNotification;
  Vue.prototype.$vm.closeNotification = closeNotification;
  Vue.prototype.$vm.closeAllNotifications = closeAllNotifications;
};
