import tinycolor from 'tinycolor2';
import { Component, Vue } from 'vue-property-decorator';
import { COLORS_DEFAULT } from '../dev/constants';
import { LooseObject } from '../dev/interfaces';
import { convertColor } from '../dev/util';

@Component
export default class VMColorMixin extends Vue {
  get colors(): Record<string, string> {
    const vm = (this as LooseObject).$vm;
    return vm && vm.colors ? vm.colors : COLORS_DEFAULT;
  }

  public getColor(color: string): string {
    color = (color || '').toLowerCase();

    if (Object.keys(this.colors).includes(color)) {
      return this.colors[color];
    }
    return convertColor(color);
  }

  public colorLuminance(color: string, luminosity: number): string {
    return tinycolor(color)
      [luminosity < 0 ? 'darken' : 'lighten'](Math.abs(luminosity))
      .toHexString();
  }
}
