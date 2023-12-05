<template>
  <h1>WoodLand</h1>

  <nav>
    <router-link to="/start-game">Play</router-link>
    <router-link to="/settings-page">Settings</router-link>
    <router-link to = "/scores">Score</router-link>
    <router-link to="/exit-page">Exit</router-link>
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
      axios.defaults.headers.common['Authorization'] = "JWT "+ access
    }else{
      axios.defaults.headers.common['Authorization'] = ''
    }
  }
 }
</script>

<style>

h1{
  margin-top: 10vh;
  text-transform: uppercase;
  font-size: 50px;
  letter-spacing: 10px;
  line-height: 1.2vh;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

#app {
  font-family: Andale Mono, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #abc0d0;
}

nav {
  padding: 10px;
  display: grid;
  justify-content: center;
  grid-template-columns: 150px 150px 150px;
}

nav a {
  font-weight: bold;
  color: #88a0b6;
  background-color: #070a1a;
  font-size: larger;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px;
  margin-left: 1rem;
}

nav a.router-link-exact-active {
  color: #070a1a;
  background-color: #88a0b6;
}
</style>
