import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      message: 'hoge'
    },
    getters: {
      message(state) {
        return state.message
      }
    },
    mutations: {
      setMessage(state, paylpad) {
        state.message = paylpad.message
      }
    },
    actions: {
      doUpdate({ commit }, message) {
        commit('setMessage', { message })
      }
    }
  })
}
export default createStore