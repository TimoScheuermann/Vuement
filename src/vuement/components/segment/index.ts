import { VMOptions } from '@/vuement/dev/interfaces';
import _Vue, { PluginFunction } from 'vue';
import VMSegment from './VMSegment.vue';
import VMSegmentItem from './VMSegmentItem.vue';

const install: PluginFunction<VMOptions> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmSegment', VMSegment);
  Vue.component('vmSegmentItem', VMSegmentItem);
};

export default install;
