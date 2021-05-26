import _Vue, { PluginFunction } from 'vue';
import VMHero from './VMHero.vue';

const install: PluginFunction<any> = function installVuementComponent(
  Vue: typeof _Vue
): void {
  Vue.component('vmHero', VMHero);
};

export default install;
