import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyB8JGSZxgt2_kU587WmAey2Y921MYvLi40',
  authDomain: 'vue-auth-f9e7e.firebaseapp.com',
  projectId: 'vue-auth-f9e7e',
  storageBucket: 'vue-auth-f9e7e.appspot.com',
  messagingSenderId: '464209827509',
  appId: '1:464209827509:web:bfcc743906c58db26b10fc',
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
