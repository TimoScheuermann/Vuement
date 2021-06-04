import { PluginFunction } from 'vue';

declare const Vuement: PluginFunction<VMOptions>;
export default Vuement;

export const vmAccordion: PluginFunction<VMOptions>;
export const vmAction: PluginFunction<VMOptions>;
export const vmAvatar: PluginFunction<VMOptions>;
export const vmCard: PluginFunction<VMOptions>;
export const vmButton: PluginFunction<VMOptions>;
export const vmCheckbox: PluginFunction<VMOptions>;
export const vmChip: PluginFunction<VMOptions>;
export const vmDialog: PluginFunction<VMOptions>;
export const vmDivider: PluginFunction<VMOptions>;
export const vmHero: PluginFunction<VMOptions>;
export const vmImage: PluginFunction<VMOptions>;
export const vmInput: PluginFunction<VMOptions>;
export const vmLink: PluginFunction<VMOptions>;
export const vmList: PluginFunction<VMOptions>;
export const vmMenuButton: PluginFunction<VMOptions>;
export const vmNavbar: PluginFunction<VMOptions>;
export const vmProgress: PluginFunction<VMOptions>;
export const vmQuote: PluginFunction<VMOptions>;
export const vmRadio: PluginFunction<VMOptions>;
export const vmRevealer: PluginFunction<VMOptions>;
export const vmScrollUp: PluginFunction<VMOptions>;
export const vmSegment: PluginFunction<VMOptions>;
export const vmSelect: PluginFunction<VMOptions>;
export const vmSheet: PluginFunction<VMOptions>;
export const vmSidebar: PluginFunction<VMOptions>;
export const vmSlider: PluginFunction<VMOptions>;
export const vmSpacer: PluginFunction<VMOptions>;
export const vmSpinner: PluginFunction<VMOptions>;
export const vmSwitch: PluginFunction<VMOptions>;
export const vmTabbar: PluginFunction<VMOptions>;
export const vmTable: PluginFunction<VMOptions>;
export const vmTextarea: PluginFunction<VMOptions>;
export const vmTitle: PluginFunction<VMOptions>;
export const vmFlow: PluginFunction<VMOptions>;
export const vmGrid: PluginFunction<VMOptions>;

export declare class VMTheme {
  color: string;
  'color-secondary': string;
  background: string;
  paragraph: string;
  container: string;
  border: string;
}

export declare class VMOptions {
  colors: Record<string, string>;
  themes: Record<string, VMTheme>;
  theme: string;
}

export declare class VMSelectSelection {
  id: string;
  title: string;
  state: boolean;
}
