import tinycolor from 'tinycolor2';
import Vue from 'vue';

// eslint-disable-next-line
export const NOOP = () => {};

export interface LooseObject {
  // eslint-disable-next-line
  [key: string]: any;
}

export function getColor(vue: Vue, color: string | null | undefined): string {
  const colors: Record<string, string> = (vue as LooseObject).$tc.colors;
  color = (color || '').toLowerCase();

  if (Object.keys(colors).includes(color)) {
    return colors[color];
  }
  return tinycolor(color).toHexString();
}

export function colorLuminance(color: string, luminosity: number): string {
  return tinycolor(color)
    [luminosity < 0 ? 'darken' : 'lighten'](Math.abs(luminosity))
    .toHexString();
}

export function getContainerPosition(
  container: Vue | Element | Vue[] | Element[]
): 'tl' | 'tr' | 'bl' | 'br' {
  if (!container) return 'bl';
  container = container as HTMLElement;
  const rect = container.getBoundingClientRect();
  // const rectBody = document.body.getBoundingClientRect();
  // const d = document.get
  const aboveTopHalf = window.innerHeight / 2 > rect.top - rect.height / 2;
  const aboveRightHalf = window.innerWidth / 2 > rect.left - rect.width / 2;

  if (aboveRightHalf && aboveTopHalf) {
    return 'tl';
  }
  if (!aboveRightHalf && aboveTopHalf) {
    return 'tr';
  }
  if (aboveRightHalf && !aboveTopHalf) {
    return 'bl';
  }
  return 'br';
}

export function convertStyles(styles: (string | null)[]): string | null {
  const style = styles.filter((x) => !!x).join('');
  return style.length > 0 ? style : null;
}
