import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{Typeid: 1, description: 'Item 1', price: 10, route: 'Item1'},
               {Typeid: 1, description: 'Item 2', price: 10, route: 'Item2'},
               {Typeid: 2, description: 'Item 3', price: 10, route: 'Item3'},
               {Typeid: 2, description: 'Item 4', price: 10, route: 'Item4'},
               {Typeid: 3, description: 'Item 5', price: 10, route: 'Item1'},
               {Typeid: 3, description: 'Item 6', price: 10, route: 'Item2'},
               {Typeid: 4, description: 'Item 7', price: 10, route: 'Item3'},
               {Typeid: 4, description: 'Item 8', price: 10, route: 'Item4'}],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
