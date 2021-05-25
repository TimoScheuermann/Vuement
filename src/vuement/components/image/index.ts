import _Vue from 'vue';
import VMImage from './VMImage.vue';

const vmImage = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmImage', VMImage);
  },
};

export default vmImage;
