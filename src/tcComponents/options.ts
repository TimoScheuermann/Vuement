export interface TCOptions {
  colors: Record<string, string>;
  settings: Record<string, string | boolean>;
  themes: TCTheme[];
}

export interface TCTheme {
  name: string;
  paragraph: string;
  background: string;
  container: string;
  color: string;
}

const colors = {
  primary: '#08f',
  error: '#ff4757',
  success: '#25ca49',
  alarm: '#f1c40f',
};

const settings = {};

const themes: TCTheme[] = [
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

const options: TCOptions = {
  colors: colors,
  settings: settings,
  themes: themes,
};

export default options;
