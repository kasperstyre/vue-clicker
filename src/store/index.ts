import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cookies: 0,
  },
  mutations: {
    addCookie(state) {
        state.cookies += 1;
    }
  },
  getters: {
    cookies: state => state.cookies
  },
  actions: {},
  modules: {}
});
