<template>
  <div class="SignIn">
    <form @submit.prevent="submit" class="form">
      <div class="form-group">
        <label class="label" for="email">Email</label>
        <input class="input" type="email" name="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label class="label" for="password">Password</label>
        <input class="input" type="password" name="password" v-model="form.password" required>
      </div>
      <div class="form-group">
        <button class="btn-signin">Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from "axios";
import {mapActions} from 'vuex';
export default {
  name: "SignIn",
  components: { },
  data(){
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods:{
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    submit(){
      this.signIn(this.form);
    }
  }
};
</script>

<style scoped>
.form {
  width: 400px;
  margin: 0 auto;
}
.form-group {
  margin: 20px;
  width: 100%;
  height: 60px;
}
.label {
  display: block;
  text-align: left;
  font-size: 16px;
  margin: 8px 0;
  font-weight: bold;
}
.input {
  width: 100%;
  border-radius: 6px;
  border: 1px solid rgb(95, 171, 233);
  padding: 8px 10px;
  outline: none;
  font-size: 16px;
}
.input:active, .input:focus {
  border: 2px solid rgb(157, 195, 231);
  padding: 7px 9px;
  outline: none;
}
.btn-signin {
  background-color: rgb(59, 194, 235);
  padding: 10px 14px;
  border: 1px solid rgb(63, 172, 245);
  border-radius: 6px;
  outline: none;
}
.btn-signin:hover {
  box-shadow: 4px 4px 4px  rgba(59, 194, 235, 0.5);
}
</style>
