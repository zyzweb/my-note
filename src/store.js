import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageYOffset: 0,
    aa:1
  },
  getters: {
    aa(state) {
      return state.aa
    }
  },
  mutations: {
    setPageYOffset(state, val) {
      state.pageYOffset = val;
    },
    good(state,val) {
      state.aa   = val
    }
  },
  actions: {
		
  }
})
