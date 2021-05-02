import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Cart from '../components/Cart.vue';
import Login from '../components/Login.vue';
import SignUp from '../components/SignUp.vue';
import ForgotPassword from '../components/ForgotPassword.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
