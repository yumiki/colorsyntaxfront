import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    code: {},
  },
  getters: {
    code: (state) => state.code,
  },
  mutations: {
    setCode (state, code) {
      state.code = code
    }
  },
})
