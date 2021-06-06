import { PluginFunction } from 'vue';
import { VueConstructor } from 'vue/types/umd';

declare const Vuement: PluginFunction<VMOptions>;
export default Vuement;

declare module 'vue/types/vue' {
  interface Vue {
    $vm: {
      setTheme(theme: string): void;
      setColor(name: string, color: string): void;
      addTheme(name: string, theme: VMTheme, replace: boolean): void;
      sendNotification(notificiation: VMNotificationObject): number;
      closeNotification(id: number): void;
      closeAllNotifications(): void;
    };
  }
}

export declare class VMTheme {
  color: string;
  'color-secondary': string;
  background: string;
  paragraph: string;
  container: string;
  border: string;
}

export declare class VMOptions {
  colors?: Record<string, string>;
  themes?: Record<string, VMTheme>;
  theme?: string;
}

export declare class VMSelectSelection {
  id: string;
  title: string;
  state: boolean;
}

export declare class VMNotificationObject {
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
