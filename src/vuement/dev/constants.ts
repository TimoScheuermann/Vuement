import { VMTheme } from './interfaces';

export const THEME_LIGHT: VMTheme = {
  color: '#1d1d1f',
  'color-secondary': '#86868b',
  background: '#ffffff',
  paragraph: '#f5f5f7',
  container: '#f2efef',
  border: '#d2d2d7',
};

export const THEME_DARK: VMTheme = {
  color: '#ffffff',
  'color-secondary': '#6e6e73',
  background: '#000000',
  paragraph: '#1d1d1f',
  container: '#2f3035',
  border: '#424245',
};

export const COLORS_DEFAULT: Record<string, string> = {
  primary: '#66bfff',
  error: '#ff4757',
  success: '#25ca49',
  alarm: '#f1c40f',
};

export const THEMES_DEFAULT: Record<string, VMTheme> = {
  light: THEME_LIGHT,
  dark: THEME_DARK,
};

// eslint-disable-next-line
export const NOOP = () => {};
