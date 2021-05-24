import _Vue from 'vue';
import TCTabbar from './TCTabbar.vue';
import TCTabbarItem from './TCTabbarItem.vue';

const tcTabbar = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcTabbar', TCTabbar);
    Vue.component('tcTabbarItem', TCTabbarItem);
  },
};

export default tcTabbar;
