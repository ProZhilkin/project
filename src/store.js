import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    channelsVisible: false,
  },
  getters: {
    channelsVisible (state) {
      return state.channelsVisible
    }
  },
  mutations: {
    toggleChannelsVisible (state) {
      state.channelsVisible = !state.channelsVisible
    }
  }
})