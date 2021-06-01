import _Vue, { PluginFunction } from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import * as vmComponents from './components';
import { COLORS_DEFAULT, THEMES_DEFAULT } from './dev/constants';
import { setTheme } from './dev/functions';
import { LooseObject, VMOptions } from './dev/interfaces';
import { convertColor } from './dev/util';
import $vm from './vm';

const install: PluginFunction<VMOptions> = function installVuement(
  Vue: typeof _Vue,
  options = {} as VMOptions
): void {
  if (!options.colors) options.colors = COLORS_DEFAULT;
  if (!options.themes) options.themes = THEMES_DEFAULT;

  for (const c in COLORS_DEFAULT) {
    if (!options.colors[c]) options.colors[c] = COLORS_DEFAULT[c];
    options.colors[c] = convertColor(options.colors[c]);
  }

  for (const theme in options.themes) {
    for (const c in options.themes[theme]) {
      (options.themes[theme] as LooseObject)[c] = convertColor(
        (options.themes[theme] as LooseObject)[c]
      );
    }
  }

  $vm(Vue, options);

  Object.values(vmComponents).forEach((component) => {
    Vue.use(component);
  });

  if (typeof window !== 'undefined') {
    setTheme(options.theme || 'light');
  }

  Vue.use(Vue2TouchEvents);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
export * from './components';
