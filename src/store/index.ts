/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dark: false,
  },
  getters: {
    dark: (state: any): boolean => {
      return state.dark;
    },
  },
  mutations: {
    dark(state: any, dark: boolean) {
      state.dark = dark;
    },
  },
});
