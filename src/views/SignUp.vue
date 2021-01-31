<template>
  <div class="sign-up">
    <div v-if="errors">
      <ul class="errors" v-for="(v, k) in errors" :key="k">
        <li class="error" v-for="error in v" :key="error">{{error}}</li>
      </ul>
    </div>
    <form @submit.prevent="submit" class="form">
      <div class="form-group">
        <label class="label" for="name">Full Name</label>
        <input class="input" type="text" name="name" v-model="form.name" required>
      </div>
      <div class="form-group">
        <label class="label" for="email">Email</label>
        <input class="input" type="email" name="email" v-model="form.email" required>
      </div>
      <div class="form-group">
        <label class="label" for="password">Password</label>
        <input class="input" type="password" name="password" v-model="form.password" required>
      </div>
      <div class="form-group">
        <label class="label" for="password">Confirm Password</label>
        <input class="input" type="password" name="password_confirmation" v-model="form.password_confirmation" required>
      </div>
      <div class="form-group">
        <button class="btn-signup">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  components: { },
  data(){
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      errors:[]
    };
  },
  methods:{
    async submit(){
      await axios.post("auth/register", this.form).then((response) => {
        if(response.status == 201){
          this.$router.replace({
            name: 'SignIn',
          })
        }
      }).catch(({response}) => {
        this.errors = response.data.errors;
      });
      // this.signIn(this.form).then(() => {
      //   this.$router.replace({
      //     name: 'Dashboard',
      //   }).catch(() => {
      //     console.log('failed');
      //   });
      // });
    }
  }
};
</script>

<style scoped>
.sign-up{
  margin-top: 75px;
}
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
  border: 1px solid #0a00b6;
  padding: 8px 10px;
  outline: none;
  font-size: 16px;
}
.input:active, .input:focus {
  border: 2px solid #0a00b6;
  padding: 7px 9px;
  outline: none;
}
.btn-signup {
  background-color: #0a00b6;
  padding: 10px 14px;
  border: 1px solid #0a00b6;
  border-radius: 6px;
  outline: none;
  color: white;
  font-weight: bold;
}
.btn-signup:hover {
  box-shadow: 4px 4px 4px  rgba(62, 59, 235, 0.5);
}
.errors{
  list-style: none;
}
.error{
  color: red;
}
</style>
