import tinycolor from 'tinycolor2';
import { VueConstructor } from 'vue';
import * as tcComponents from './components';
import TCGlobalMixin from './mixins/TCGlobal.mixin';
import tcoptions, { TCOptions } from './options';

const install = (vue: VueConstructor, options: TCOptions = tcoptions): void => {
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

  Object.values(tcComponents).forEach((tcComp) => {
    vue.use(tcComp);
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

  TCGlobalMixin(vue, options);
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install;
