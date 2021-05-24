import _Vue from 'vue';
import TCSegment from './TCSegment.vue';
import TCSegmentItem from './TCSegmentItem.vue';

const tcSegment = {
  install(Vue: typeof _Vue): void {
    Vue.component('tcSegment', TCSegment);
    Vue.component('tcSegmentItem', TCSegmentItem);
  },
};

export default tcSegment;
