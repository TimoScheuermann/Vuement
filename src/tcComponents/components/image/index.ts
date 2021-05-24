import _Vue from 'vue';
import TCImage from './TCImage.vue';

const tcImage = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcImage', TCImage);
  },
};

export default tcImage;
