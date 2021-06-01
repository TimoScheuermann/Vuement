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