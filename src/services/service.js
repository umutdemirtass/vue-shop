import axios from 'axios';

export default {
  fetchProducts() {
    return axios.get('https://shop-app-db3ec-default-rtdb.firebaseio.com/products.json');
  },
};
