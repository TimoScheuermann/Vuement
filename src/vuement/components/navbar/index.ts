import _Vue from 'vue';
import VMNavbar from './VMNavbar.vue';
import VMNavbarItem from './VMNavbarItem.vue';

const vmNavbar = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmNavbar', VMNavbar);
    Vue.component('vmNavbarItem', VMNavbarItem);
  },
};

export default vmNavbar;
