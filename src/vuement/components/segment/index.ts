import _Vue from 'vue';
import VMSegment from './VMSegment.vue';
import VMSegmentItem from './VMSegmentItem.vue';

const vmSegment = {
  install(Vue: typeof _Vue): void {
    Vue.component('vmSegment', VMSegment);
    Vue.component('vmSegmentItem', VMSegmentItem);
  },
};

export default vmSegment;
