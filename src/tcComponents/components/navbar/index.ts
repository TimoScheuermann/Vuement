import _Vue from 'vue';
import TCNavbar from './TCNavbar.vue';
import TCNavbarItem from './TCNavbarItem.vue';

const tcNavbar = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcNavbar', TCNavbar);
    Vue.component('tcNavbarItem', TCNavbarItem);
  },
};

export default tcNavbar;
