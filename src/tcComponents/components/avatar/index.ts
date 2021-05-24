import _Vue from 'vue';
import TCAvatar from './TCAvatar.vue';

const tcAvatar = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcAvatar', TCAvatar);
  },
};

export default tcAvatar;
