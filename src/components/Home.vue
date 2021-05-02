<script>
import { mapGetters } from 'vuex';
import appHeader from './appHeader.vue';
import Loader from './Loader.vue';
import Product from './Product.vue';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    appHeader,
    Loader,
    Product,
  },
  computed: {
    ...mapGetters([
      'products',
      'groupedProducts',
    ]),
  },
  created() {
    this.$store.dispatch('fetchProducts').then(() => {
      this.isLoading = false;
    });
  },
};
</script>

<template>
<section>
  <app-header />
  <loader v-if="isLoading"/>
  <section class="container py-5">
    <div v-for="group in groupedProducts" :key="group" class="card-deck">
    <product v-for="product in group" :key="product.id" :product="product" />
    </div>
  </section>
</section>
</template>
