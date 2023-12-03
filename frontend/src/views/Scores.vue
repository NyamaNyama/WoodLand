<template>
    <nav>
    <router-link to="/sign-up">Sign Up</router-link>
    <router-link to="/log-in">Log In</router-link>
  </nav>
  <router-view/>
</template>

<script lang="ts">
import axios from 'axios';
export default{
  name:'ScoresList',
  data(){
    return{
      scores: [] as any[]
    };
  },
  mounted(){
    this.getScores()
  },
  methods:{
    getScores(): void{
      axios
      .post('/api/v1/scores')
      .then(response =>{
        this.scores=response.data;
      })
      .catch(error=>{
        console.log(error)
      });
      
    }
  }
}
</script>