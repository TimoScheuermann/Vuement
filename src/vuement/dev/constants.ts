import { VMTheme } from './interfaces';

export const THEME_LIGHT: VMTheme = {
  color: '#1d1d1f',
  'color-secondary': '#86868b',
  background: '#ffffff',
  paragraph: '#f5f5f7',
  container: '#e7e5e5',
  border: '#d2d2d7',
};

export const THEME_DARK: VMTheme = {
  color: '#ffffff',
  'color-secondary': '#6e6e73',
  background: '#000000',
  paragraph: '#1d1d1f',
  container: '#3a3b41',
  border: '#424245',
};

export const COLORS_DEFAULT: Record<string, string> = {
  primary: '#08f',
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
