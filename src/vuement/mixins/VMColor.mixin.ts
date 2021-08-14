import tinycolor from 'tinycolor2';
import { Component, Vue } from 'vue-property-decorator';
import { COLORS_DEFAULT, THEME_LIGHT } from '../dev/constants';
import { LooseObject } from '../dev/interfaces';
import { convertColor } from '../dev/util';

@Component<VMColorMixin>({
  name: 'vmColorMixin',
})
export default class VMColorMixin extends Vue {
  get colors(): Record<string, string> {
    const vm = (this as LooseObject).$vm;
    let colors = Object.assign({}, COLORS_DEFAULT, THEME_LIGHT);

    if (vm) {
      colors = Object.assign(colors, vm.colors ? vm.coloes : COLORS_DEFAULT);
      if (vm.theme && vm.themes[vm.theme]) {
        colors = Object.assign(colors, vm.themes[vm.theme]);
      } else {
        colors = Object.assign(colors, THEME_LIGHT);
      }
    }

    return colors;
  }

  public getColor(color: string): string {
    color = (color || '').toLowerCase();

    if (Object.keys(this.colors).includes(color)) {
      return `var(--vm-${color})`;
    }
    if (/^\d{1,3},\d{1,3},\d{1,3}$/.test(color)) {
      return color;
    }

    return convertColor(color);
  }

  public colorLuminance(color: string, luminosity: number): string {
    return tinycolor(color)
      [luminosity < 0 ? 'darken' : 'lighten'](Math.abs(luminosity))
      .toHexString();
  }
}
