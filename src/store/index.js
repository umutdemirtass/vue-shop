import Vue from 'vue';
import Vuex from 'vuex';
import service from '../services/service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    logged: false,
    cart: [],
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
    getCartProducts(state) {
      return state.cart;
    },
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCart(state, items) {
      state.cart.push(items);
    },
  },
  actions: {
    fetchProducts(context) {
      return service.fetchProducts().then((snapshot) => {
        context.commit('setProducts', snapshot.data);
      });
    },
    getCart(context, payload) {
      context.commit('setCart', payload);
    },
  },
  modules: {
  },
});
