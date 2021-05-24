import tinycolor from 'tinycolor2';
import _Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import * as tcComponents from './components';
import tcoptions, { TCOptions } from './options';
import $tc from './tc';

const TCComponents = {
  install(Vue: typeof _Vue, options: TCOptions = tcoptions): void {
    if (!options.colors) options.colors = tcoptions.colors;
    if (!options.settings) options.settings = tcoptions.settings;
    if (!options.themes) options.themes = tcoptions.themes;

    for (const c in tcoptions.colors) {
      if (!options.colors[c]) {
        options.colors[c] = tcoptions.colors[c];
      }

      options.colors[c] = tinycolor(options.colors[c]).toHexString();
    }

    for (const s in tcoptions.settings) {
      if (!options.settings[s]) {
        options.settings[s] = tcoptions.settings[s];
      }
    }

    Object.values(tcComponents).forEach((component) => {
      Vue.use(component);
    });

    if (typeof window !== 'undefined') {
      const theme = tcoptions.themes[0];
      Object.entries(theme).forEach(([key, value]) => {
        if (key !== 'name') {
          document.documentElement.style.setProperty('--tc-' + key, value);
          document.documentElement.style.setProperty(key, value);
        }
      });
    }

    $tc(Vue, options);

    Vue.use(Vue2TouchEvents);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(TCComponents);
}

export default TCComponents;
export * from './components';
