import Vue from "vue";
import Vuex from "vuex";

import user from './user';
import counter from './counter';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    counter
  }
});