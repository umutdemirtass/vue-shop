<script>
import firebase from 'firebase';
import appHeader from './appHeader.vue';

export default {
  name: 'ForgotPassword',
  components: {
    appHeader,
  },
  data() {
    return {
      email: null,
    };
  },
  methods: {
    forgot() {
      const auth = firebase.auth();

      auth.sendPasswordResetEmail(auth.currentUser.email)
        .then(() => {
          alert('Your new password information has been sent to your e-mail');
          this.$router.push('/login');
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<template>
<div>
    <appHeader />
    <div class="vertical-center body">
        <div class="inner-block">
            <div class="vue">
                <form @submit.prevent="forgot">
                      <h3>Forgot Password</h3>
                            <div class="form-group">
                              <label>Email Adress</label>
                              <input type="email" class="form-control form-control-lg">
                            </div>
                        <button class="btn btn-dark btn-lg btn-block">Reset Password</button>
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

</style>
