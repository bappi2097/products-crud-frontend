<template>
  <div id="app">
    <TheNavigation/>
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
export default{
  components:{
    TheNavigation
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
