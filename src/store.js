import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageYOffset: 0,
    aa:1
  },
  mutations: {
    setPageYOffset(state, val) {
      state.pageYOffset = val;
    },
    good(state,val) {
      console.log(state.aa);
      state.aa += 1
    }
  },
  actions: {
		
  }
})
