<template>
    <nav class="nav">
        <ul class="links">
            <li class="link logo">WeDevs</li>
            <template v-if="authenticated">
                <li class="link">
                    <router-link :to="{name: 'Dashboard'}">Dashboard</router-link>
                </li>
                <li class="link"><a href="#" @click.prevent="signOut">Logout</a></li>
                <li class="margin-left user-name">{{user.name}}</li>
            </template>
            <template v-else>
                <li class="link">
                    <router-link :to="{name: 'SignIn'}">Sign in</router-link>
                </li>
                <li class="link">
                    <router-link :to="{name: 'SignUp'}">Sign up</router-link>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: "Home",
  components: { },
  computed: {
      ...mapGetters({
          authenticated: 'auth/authenticated',
          user: 'auth/user',
      })
  },
  methods:{
      ...mapActions({
          signOutAction: 'auth/signOut'
      }),
      signOut(){
          this.signOutAction().then(() => {
              this.$router.replace({
                  name: 'SignIn'
              })
          })
      }
  }
};
</script>


<style scoped>
.nav {
  padding: 20px 30px;
  background: #6200EA;
}
.links {
    display: flex;
    align-items: center;
    list-style: none;
    width: 100%;
}
.link {
    padding: 0 10px;
}
.logo{
    color: white;
    font-weight: bold;
    font-size: 25px;
    margin-right: 50px;
}
.link a {
    text-decoration: none;
    color: rgb(207, 207, 207);
    font-weight: bold;
}
.link a.router-link-exact-active {
    color: rgb(255, 255, 255);
}
.margin-left{
    margin-left: auto;
}
.user-name{
    color: white;
}
</style>