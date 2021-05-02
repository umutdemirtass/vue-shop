<template>
  <div class="navbar navbar-inverse bg-dark">
    <div class="container d-flex justify-content-between">
      <router-link to="/" class="navbar-brand">Shop App</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signUp">SignUp</router-link>
      <router-link to="/cart"><sepet></sepet></router-link>
    </div>
  </div>
</template>

<script>
import sepet from './sepet.vue';

export default {
  components: {
    sepet,
  },
};
</script>
