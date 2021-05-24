import _Vue from 'vue';
import TCCard from './TCCard.vue';

const tcCard = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcCard', TCCard);
  },
};

export default tcCard;
