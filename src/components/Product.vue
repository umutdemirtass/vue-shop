<script>
export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true,
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
    <button class="btn btn-primary">Satin Al</button>
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
