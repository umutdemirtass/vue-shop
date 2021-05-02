<script>
import firebase from 'firebase';
import appHeader from './appHeader.vue';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert('Entry has been made successfully');
            this.$router.push('/');
          },
          (err) => {
            alert(`Error - ${err.message}`);
          },
        );
    },
  },
  components: {
    appHeader,
  },
};
</script>

<template>
<div>
    <app-header></app-header>
    <div class="vertical-center body">
        <div class="inner-block">
            <div class="vue">
               <form @submit.prevent="login">
                 <h3>Sign In</h3>
                    <div class="form-group">
                       <label>Email Adress</label>
                       <input type="email" v-model="email" class="form-control form-control-lg">
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password"
                        v-model="password" class="form-control form-control-lg">
                    </div>
                    <button class="btn btn-dark btn-lg btn-block">Sign In</button>
                   <p class="forgot-password text-right mt-2 mb-4">
                     <router-link to="/forgotPassword">Forgot Password</router-link>
                   </p>
                   <div class="social-icons">
                    <ul>
                        <li><a href="https://www.youtube.com/watch?v=rett04rBM-o&ab_channel=gereksizsesler"><i class="fa fa-google"></i></a></li>
                        <li><a href="https://www.youtube.com/watch?v=rett04rBM-o&ab_channel=gereksizsesler"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/watch?v=rett04rBM-o&ab_channel=gereksizsesler"><i class="fa fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.body {
  background: #525f7f ;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}

body,
html,
.App,
.vue,
.vertical-center {
  width: 100%;
  height: 100%;
}

.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
}

.inner-block {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 0px 100px red;
  padding: 40px 55px 45px 55px;
  border-radius: 15px;

}

.vertical-center .form-control:focus {
  border-color: blue;
  box-shadow: none;
}

.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

label {
  font-weight: 500;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7a7a7a;
  margin: 0;
}

.forgot-password a {
  color: blue;
}

.social-icons {
  text-align: center;
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 1.5em;
  color: #222222;
}

.social-icons ul {
  margin: 0;
  padding: 0;
}
.social-icons ul li {
  display: inline-block;
  zoom: 1;
  width: 65px;
  vertical-align: middle;
  border: 1px solid #e3e8f9;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  margin-right: 5px;
  background: #f4f6ff;
}

.social-icons ul li a {
  display: block;
  font-size: 1.4em;
  margin: 0 5px;
  text-decoration: none;
}
.social-icons ul li a:focus i{
  color: black;
}
</style>
