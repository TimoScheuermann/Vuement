import tinycolor from 'tinycolor2';
import _Vue, { PluginFunction } from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import * as vmComponents from './components';
import vmoptions, { VMOptions } from './options';
import { setTheme } from './util';
import $vm from './vm';

const install: PluginFunction<VMOptions> = function installVuement(
  Vue: typeof _Vue,
  options = vmoptions
): void {
  if (!options.colors) options.colors = vmoptions.colors;
  if (!options.settings) options.settings = vmoptions.settings;
  if (!options.themes) options.themes = vmoptions.themes;

  for (const c in vmoptions.colors) {
    if (!options.colors[c]) {
      options.colors[c] = vmoptions.colors[c];
    }

    options.colors[c] = tinycolor(options.colors[c]).toHexString();
  }

  for (const s in vmoptions.settings) {
    if (!options.settings[s]) {
      options.settings[s] = vmoptions.settings[s];
    }
  }

  $vm(Vue, options);

  Object.values(vmComponents).forEach((component) => {
    Vue.use(component);
  });

  if (typeof window !== 'undefined') {
    setTheme(options.theme);
  }

  Vue.use(Vue2TouchEvents);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
export * from './components';
