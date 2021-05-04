<script>

export default {
  name: 'Product',
  data() {
    return {
      fk: [],
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClick(e) {
      const { logged } = this.$store.state;

      if (!logged) {
        alert('You must login first');
        return;
      }

      alert('The product has been added to the cart');
      this.$store.dispatch('getCart', e);
    },
  },
};
</script>

<template>
  <div class="card">
    <router-link to="/">
      <img class="card-img-top" :src="product.image">
    </router-link>
    <div class="card-body">
      <router-link to="/">
        <h4 class="card-title">{{product.title}}</h4>
      </router-link>
      <p class="card-text">{{product.description}}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted text-right">Price: ${{product.price}}</small>
    </div>
    <button class="btn btn-primary" @click="handleClick(product)">Satin Al</button>
  </div>
</template>

<style>
.card{
  margin-bottom: 30px;
  min-width: 250px;
  background-color: red;
}
.card img {
  width: 100%;
  height: 250px;
}
</style>
