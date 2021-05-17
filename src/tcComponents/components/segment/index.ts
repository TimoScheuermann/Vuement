import { VueConstructor } from 'vue';
import TCSegment from './TCSegment.vue';
import TCSegmentItem from './TCSegmentItem.vue';

export default (vue: VueConstructor): void => {
  vue.component('tcSegment', TCSegment);
  vue.component('tcSegmentItem', TCSegmentItem);
};
