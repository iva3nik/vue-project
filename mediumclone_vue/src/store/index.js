import {createStore} from 'vuex'
import auth from '@/store/modules/auth'

export default createStore({
  state: {
    count: 0,
  },
  mutations: {},
  actions: {},
  modules: {auth},
})
