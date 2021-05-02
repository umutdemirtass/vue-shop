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
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert('Member registration created, you will be directed to the login page');
            this.$router.push('/login');
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
 <appHeader></appHeader>
    <div class="vertical-center body">
        <div class="inner-block">
            <div class="vue">
                <form @submit.prevent="signUp">
                    <h3>Sign Up</h3>
                    <!-- <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" class="form-control form-control-lg">
                    </div> -->
                    <div class="form-group">
                        <label>Email Name</label>
                        <input type="email" v-model="email" class="form-control form-control-lg">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password"
                        v-model="password" class="form-control form-control-lg">
                    </div>
                    <button class="btn btn-lg btn-dark btn-block">Sign Up</button>
                    <p class="forgot-password text-right">
                        Already registered
                        <router-link to="/login">Sign in</router-link>
                    </p>
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

</style>
