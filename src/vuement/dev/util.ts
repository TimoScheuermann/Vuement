import tinycolor from 'tinycolor2';
import Vue from 'vue';

export function convertColor(color: string): string {
  const c = tinycolor(color);
  const { r, g, b } = c.toRgb();
  return `${r},${g},${b}`;
}

export function getContainerPosition(
  container: Vue | Element | Vue[] | Element[]
): 'tl' | 'tr' | 'bl' | 'br' {
  if (!container) return 'bl';
  container = container as HTMLElement;
  const rect = container.getBoundingClientRect();
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

export const VMBus = new Vue();
