export interface VMTheme {
  color: string;
  'color-secondary': string;
  background: string;
  paragraph: string;
  container: string;
  border: string;
}

export interface VMOptions {
  colors: Record<string, string>;
  themes: Record<string, VMTheme>;
  theme: string;
}

export interface LooseObject {
  // eslint-disable-next-line
  [key: string]: any;
}

export interface VMSelectSelection {
  id: string;
  title: string;
  state: boolean;
}

import { Location } from 'vue-router';

export interface VMNotification {
  title?: string;
  text: string;
  image?: string;
  href?: string;
  to?: Location;
  routeName?: string;
  callback?: VoidFunction;
}
