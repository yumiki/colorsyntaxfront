import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    code: {},
    loading: {
      currentState: false
    }
  },
  getters: {
    code: (state) => state.code,
  },
  mutations: {
    setCode (state, code) {
      state.code = code
    },
    setLoading (state, loading) {
      state.loading = loading
    }
  },
})
