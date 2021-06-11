import { VMOptions } from '@/vuement/dev/interfaces';
import _Vue, { PluginFunction } from 'vue';
import VMOnboarding from './VMOnboarding.vue';
import VMOnboardingView from './VMOnboardingView.vue';

const install: PluginFunction<VMOptions> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmOnboarding', VMOnboarding);
  Vue.component('vmOnboardingView', VMOnboardingView);
};

export default install;
