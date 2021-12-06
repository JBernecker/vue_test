import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    dados: [], 
  },
  mutations: {
    SetDados(state, filmes) {
      filmes.forEach(filme => {
        state.dados.push({
          Id: filme.id,
          title: filme.title,
          description: filme.description,
          score: filme.rt_score,
        })
      });
      console.log(state.dados)
    },
  },
  actions: {
    getFilmes({ commit }) {
    axios.get('https://ghibliapi.herokuapp.com/films/')
        .then(response => {
            commit('SetDados', response.data)
        }).catch(err => {
          console.log(err);
        })
}
  },
  getters: {
    filmeScore(state){
      const filmes = [];
      state.dados.forEach((filme) => {
        if ( filme.score >= 95) {
          filmes.push(filme)
        }
      })
      return filmes;
    },
  },
  modules: {
  }
})
