export interface VMOptions {
  colors: Record<string, string>;
  settings: Record<string, string>;
  themes: VMTheme[];
  theme: string;
}

export interface VMTheme {
  name: string;
  paragraph: string;
  background: string;
  container: string;
  color: string;
}

export const colors = {
  primary: '#08f',
  error: '#ff4757',
  success: '#25ca49',
  alarm: '#f1c40f',
};

const settings = {};

export const themes: VMTheme[] = [
  {
    name: 'light',
    background: '#f5f5f7',
    paragraph: '#ffffff',
    container: '#e7e5e5',
    color: '#111',
  },
  {
    name: 'dark',
    background: '#1f2024',
    paragraph: '#28292d',
    container: '#3a3b41',
    color: '#eee',
  },
];

const options: VMOptions = {
  colors: colors,
  settings: settings,
  themes: themes,
  theme: 'light',
};

export default options;
