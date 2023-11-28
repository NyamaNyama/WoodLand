<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/sign-up">Sign up</router-link> |
    <router-link to="/log-in">Log in</router-link>
  </nav>
  <router-view/>
</template>

<script>
import axios from 'axios';
 export default{
  name:'App',
  beforeCreate(){
    this.$store.commit('initializeStore')

    const access = this.$store.state.access

    if(access){
      axios.defaults.header.common['Authorization'] = "JWT "+ access
    }else{
      axios.defaults.headers.common['Authorization'] = ''
    }
  }
 }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
