<template>
  <h1>WoodLand</h1>

  <nav id = "mainLink">
    <router-link to="/start-game">Play</router-link>
    <router-link to = "/scores">Score</router-link>
    <router-link to="/game-control">Controls</router-link>
    <router-link to="/exit-page">Exit</router-link>
  </nav>
<!--  @beforeRouteLeave="handleRouteLeave"-->
  <router-view/>
</template>

<script>
// import { onBeforeRouteLeave } from "vue-router";

// onBeforeRouteLeave((to, from, next) => {

//   const canvas = document.querySelector("#runner-canvas");
//   if (canvas) {
//     canvas.parentNode?.removeChild(canvas);
//   }
//   next();
// });
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

#mainLink{
  grid-template-columns: 150px 150px 150px;
}

nav {
  padding: 10px;
  display: grid;
  justify-content: center;
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
