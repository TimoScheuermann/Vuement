import Vue from '*.vue';
import { Location } from 'vue-router';
import { VueConstructor } from 'vue/types/umd';

export interface VMTheme {
  color: string;
  'color-secondary': string;
  background: string;
  paragraph: string;
  container: string;
  border: string;
}

export interface VMOptions {
  colors?: Record<string, string>;
  themes?: Record<string, VMTheme>;
  theme?: string;
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

export interface VMNotificationObject {
  id?: number;
  title?: string;
  text?: string;
  image?: string;
  href?: string;
  to?: Location;
  routeName?: string;
  callback?: VoidFunction;
  duration?: 'none' | number;
  closeable?: boolean;
  content?: VueConstructor<Vue>;
  props?: Record<string, any>;
}
