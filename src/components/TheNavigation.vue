<template>
    <nav class="nav">
        <ul class="links">
            <li class="link">
                <router-link :to="{name: 'Home'}">Home</router-link>
            </li>
            <li class="link">
                <router-link :to="{name: 'SignIn'}">Sign in</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: { }
};
</script>


<style scoped>
.nav {
  padding: 30px;
}
.links {
    display: flex;
    list-style: none;
}
.link {
    margin: 0 10px;
}
.link a {
    text-decoration: none;
}
.link a.router-link-exact-active {
    color: #42b983;
}
</style>