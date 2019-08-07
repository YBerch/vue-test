import Vue from "vue";
import Vuex from "vuex";
import createLogger from 'vuex/dist/logger'

import user from './modules/user';
import counter from './modules/counter';

Vue.use(Vuex);

const testPlugin = store => {
  store.subscribe((mutation, state) => {
    console.log(mutation)
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
  })
};

const production = process.env.NODE_ENV !== 'production';

const logger = createLogger({
  collapsed: false, // auto-expand logged mutations
  filter (mutation, stateBefore, stateAfter) {
    // returns `true` if a mutation should be logged
    // `mutation` is a `{ type, payload }`
    return mutation.type !== "counter/DECREMENT_SYNC"
  },
  transformer (state) {
    // transform the state before logging it.
    // for example return only a specific sub-tree
    return state.counter
  },
  mutationTransformer (mutation) {
    // mutations are logged in the format of `{ type, payload }`
    // we can format it any way we want.
    return mutation.type
  },
  logger: console, // implementation of the `console` API, default `console`
});

export default new Vuex.Store({
  modules: {
    user,
    counter
  },
  plugins: production
    ? [logger]
    : [],
  strict: production
});
