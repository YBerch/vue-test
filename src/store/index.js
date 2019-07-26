import Vue from "vue";
import Vuex from "vuex";

import user from './modules/user';
import counter from './modules/counter';

Vue.use(Vuex);

const testPlugin = store => {
  store.subscribe((mutation, state) => {
    console.log(mutation)
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
  })
}

export default new Vuex.Store({
  modules: {
    user,
    counter
  },
  plugins: [testPlugin]
});