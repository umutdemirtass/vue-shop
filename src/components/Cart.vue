<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      product: 'getCartProducts',
    }),
  },
  methods: {
    increase(id) {
      this.$store.commit('setInc', id);
    },
    decrease(id) {
      this.$store.commit('setDec', id);
    },
    getTotalPrice() {
      const container = this.product;
      const total = container.reduce((accumulator, current) => accumulator + current.showPrice, 0);
      return total;
    },
    buy() {
      alert('Payment has been made. Good day. You are directed to the main page.');
    },
  },
};
</script>
<template>
<div class="container px-4 py-5 mx-auto" >
    <div class="row d-flex justify-content-center">
        <div class="col-5">
            <h4 class="heading">Shopping Bag</h4>
            <router-link to='/'>
            <span class="list-style:none;">Contiune Shopping</span></router-link>
        </div>
        <div class="col-7">
            <div class="row text-right">
                <div class="col-4">
                    <h6 class="mt-2">Category</h6>
                </div>
                <div class="col-4">
                    <h6 class="mt-2">Quantity</h6>
                </div>
                <div class="col-4">
                    <h6 class="mt-2">Price</h6>
                </div>
            </div>
        </div>
    </div>
    <div class="row d-flex justify-content-center
     border-top" v-for="product in product" :key="product">
        <div class="col-5">
            <div class="row d-flex">
                <div class="book"> <img :src="product.image" class="book-img"></div>
                <div class="my-auto flex-column d-flex pad-left">
                    <h6 class="mob-text">{{product.title}}</h6>
                    <p class="mob-text">{{product.description}}</p>
                </div>
            </div>
        </div>
        <div class="my-auto col-7">
            <div class="row text-right">
                <div class="col-4">
                    <p class="mob-text">{{product.category}}</p>
                </div>
                <div class="col-4">
                    <div class="row d-flex justify-content-end px-3">
                        <p class="mb-0" id="cnt1">{{product.quantity}}</p>
                        <div class="d-flex flex-column plus-minus">
                            <span @click='increase(product.id)' class="vsm-text plus">+</span>
                            <span @click='decrease(product.id)' class="vsm-text minus">-</span>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <h6 class="mob-text">${{product.showPrice}}</h6>
                </div>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-lg-12">
            <div class="card">
                <div class="row">
                    <div class="col-lg-4 mt-2">
                        <div class="row d-flex justify-content-between px-4">
                            <p class="mb-1 text-left">Subtotal</p>
                            <h6 class="mb-1 text-right">${{getTotalPrice()}}</h6>
                        </div>
                        <router-link to="/">
                        <button @click="buy" class="btn-block btn-blue">
                            <span>
                                <span id="checkout">Checkout</span>
                                <span id="check-amt">${{getTotalPrice()}}</span>
                            </span>
                        </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-color: #fff;
    background-repeat: no-repeat
}

.plus-minus {
    position: relative
}

.plus {
    position: absolute;
    top: -4px;
    left: 2px;
    cursor: pointer
}

.minus {
    position: absolute;
    top: 8px;
    left: 5px;
    cursor: pointer
}

.vsm-text:hover {
    color: #FF5252
}

.book,
.book-img {
    width: 120px;
    height: 180px;
    border-radius: 5px
}

.book {
    margin: 20px 15px 5px 15px
}

.border-top {
    border-top: 1px solid #EEEEEE !important;
    margin-top: 20px;
    padding-top: 15px
}

.card {
    margin: 40px 0px;
    padding: 40px 50px;
    border-radius: 20px;
    border: none;
    box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2)
}

input,
textarea {
    background-color: #F3E5F5;
    padding: 8px 15px 8px 15px;
    width: 100%;
    border-radius: 5px !important;
    box-sizing: border-box;
    border: 1px solid #F3E5F5;
    font-size: 15px !important;
    color: #000 !important;
    font-weight: 300
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #9FA8DA;
    outline-width: 0;
    font-weight: 400
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

.pay {
    width: 80px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #673AB7;
    margin: 10px 20px 10px 0px;
    cursor: pointer;
    box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2)
}

.gray {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    filter: grayscale(100%);
    color: #E0E0E0
}

.gray .pay {
    box-shadow: none
}

#tax {
    border-top: 1px lightgray solid;
    margin-top: 10px;
    padding-top: 10px
}

.btn-blue {
    border: none;
    border-radius: 10px;
    background-color: #673AB7;
    color: #fff;
    padding: 8px 15px;
    margin: 20px 0px;
    cursor: pointer
}

.btn-blue:hover {
    background-color: #311B92;
    color: #fff
}

#checkout {
    float: left
}

#check-amt {
    float: right
}

@media screen and (max-width: 768px) {

    .book,
    .book-img {
        width: 100px;
        height: 150px
    }

    .card {
        padding-left: 15px;
        padding-right: 15px
    }

    .mob-text {
        font-size: 13px
    }

    .pad-left {
        padding-left: 20px
    }
}
</style>
