import _Vue from 'vue';
import VMCard from './VMCard.vue';

const vmCard = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmCard', VMCard);
  },
};

export default vmCard;
