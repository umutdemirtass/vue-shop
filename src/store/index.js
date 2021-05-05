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
    setInc(state, id) {
      for (let i = 0; i < state.cart.length; i += 1) {
        if (state.cart[i].id === id) {
          state.cart[i].quantity += 1;
          state.cart[i].showPrice = state.cart[i].quantity * state.cart[i].price;
        }
      }
    },
    setDec(state, id) {
      for (let i = 0; i < state.cart.length; i += 1) {
        if (state.cart[i].id === id) {
          state.cart[i].quantity -= 1;
          state.cart[i].showPrice = state.cart[i].quantity * state.cart[i].price;
        }
      }
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
