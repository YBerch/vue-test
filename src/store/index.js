import Vue from "vue";
import Vuex from "vuex";

import user from './modules/user';
import counter from './modules/counter';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    counter
  }
});