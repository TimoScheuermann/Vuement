/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dark: false,
    desktop: false,
    sidebar: false,
  },
  getters: {
    dark: (state: any): boolean => {
      return state.dark;
    },
    desktop: (state: any): boolean => {
      return state.desktop;
    },
    sidebar: (state: any): boolean => {
      return state.sidebar;
    },
  },
  mutations: {
    dark(state: any, dark: boolean) {
      state.dark = dark;
    },
    desktop(state: any, desktop: boolean) {
      state.desktop = desktop;
    },
    sidebar(state: any, sidebar: boolean) {
      state.sidebar = sidebar;
    },
  },
});
