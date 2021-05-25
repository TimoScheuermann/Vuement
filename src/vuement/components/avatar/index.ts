import _Vue from 'vue';
import VMAvatar from './VMAvatar.vue';

const vmAvatar = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmAvatar', VMAvatar);
  },
};

export default vmAvatar;
