import _Vue from 'vue';
import VMTabbar from './VMTabbar.vue';
import VMTabbarItem from './VMTabbarItem.vue';

const vmTabbar = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmTabbar', VMTabbar);
    Vue.component('vmTabbarItem', VMTabbarItem);
  },
};

export default vmTabbar;
