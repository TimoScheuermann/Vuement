import { VueConstructor } from 'vue';
import TCNavbar from './TCNavbar.vue';
import TCNavbarItem from './TCNavbarItem.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcNavbar', TCNavbar);
  vue.component('tcNavbarItem', TCNavbarItem);
};
