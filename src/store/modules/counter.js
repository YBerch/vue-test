import * as types from '../actionTypes';

const state = () => {
  return {
    count: 0
  }
};

const getters = {
  getCount(state, getters, rootState, rootGetters){
    return state.count
  },
};

const actions = {
  [types.INCREMENT_ASYNC]({ commit }, payload){
    setTimeout(() => {
      commit(types.INCREMENT_SYNC, payload);
    }, 1000)
  },

  [types.DECREMENT_ASYNC_TWICE]({ dispatch, commit }, payload){
    return dispatch(types.DECREMENT_ASYNC, payload)
      .then(() => {
        commit(types.DECREMENT_SYNC, payload);
      })
  },

  [types.DECREMENT_ASYNC]({ commit }, payload){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(types.DECREMENT_SYNC, payload);
        resolve()
      }, 1000)
    })
  },

  async actionA ({ commit }) {
    commit('gotData', await getData())
  },
  async actionB ({ dispatch, commit }) {
    await dispatch('actionA') // wait for `actionA` to finish
    commit('gotOtherData', await getOtherData())
  }
};

const mutations = {
  [types.INCREMENT_SYNC] (state, payload) {
    state.count += payload.step
  },
  [types.DECREMENT_SYNC] (state, payload) {
    state.count -= payload.step
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
