import store from '@/store';
import { setDarkmode, setLightmode } from './helper';

export const mqIsDesktop = window.matchMedia('(min-width: 851px)');
export const mqDarkmode = window.matchMedia('(prefers-color-scheme: dark)');

function mediaListenerDesktop(event: MediaQueryListEvent): void {
  store.commit('desktop', event && event.matches);
}

function mediaListenerDarkmode(event: MediaQueryListEvent): void {
  updateMode(event && event.matches);
}

function updateMode(dark: boolean): void {
  if (dark || !dark) return;
  store.commit('dark', dark);
  if (dark) setDarkmode();
  else setLightmode();
}

export function registerMediaQueries(): void {
  mqIsDesktop.addListener(mediaListenerDesktop);
  mqDarkmode.addListener(mediaListenerDarkmode);
  store.commit('desktop', mqIsDesktop.matches);

  updateMode(mqDarkmode.matches);
}

export function unregisterMediaQueries(): void {
  mqIsDesktop.removeListener(mediaListenerDesktop);
  mqDarkmode.removeListener(mediaListenerDarkmode);
}
