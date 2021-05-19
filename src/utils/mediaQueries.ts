import store from '@/store';

export const mqIsDesktop = window.matchMedia('(min-width: 851px)');
export const mqDarkmode = window.matchMedia('(prefers-color-scheme: dark)');

function mediaListenerDesktop(event: MediaQueryListEvent): void {
  store.commit('desktop', event && event.matches);
}

function mediaListenerDarkmode(event: MediaQueryListEvent): void {
  store.commit('dark', event && event.matches);
}

export function registerMediaQueries(): void {
  mqIsDesktop.addListener(mediaListenerDesktop);
  mqDarkmode.addListener(mediaListenerDarkmode);
  store.commit('desktop', mqIsDesktop.matches);
  store.commit('dark', mqDarkmode.matches);
}

export function unregisterMediaQueries(): void {
  mqIsDesktop.removeListener(mediaListenerDesktop);
  mqDarkmode.removeListener(mediaListenerDarkmode);
}
