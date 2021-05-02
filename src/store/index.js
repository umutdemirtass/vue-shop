import Vue from 'vue';
import Vuex from 'vuex';
import service from '../services/service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    products(state) {
      return state.products;
    },
    groupedProducts(state) {
      const grouped = [];

      state.products.forEach((product, index) => {
        if (index % 3 === 0) {
          grouped.push([]);
        }
        grouped[grouped.length - 1].push(product);
      });

      return grouped;
    },
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    fetchProducts(context) {
      return service.fetchProducts().then((snapshot) => {
        context.commit('setProducts', snapshot.data);
      });
    },
  },
  modules: {
  },
});
