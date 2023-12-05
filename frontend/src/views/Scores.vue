<template>
    <div class="score">
      <h2>Leaderboard</h2>
      <ol>
        <li v-for="(score,index) in scores" :key="index">
            {{score.user.username}} : {{score.score}}
        </li>
      </ol>   
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
export default defineComponent({
  name:'ScoresList',
  data(){
    return{
      scores: [] as any[]
    };
  },
  mounted(){
    this.getScores();
  },
  methods:{
    getScores(): void{
      axios
      .get('http://127.0.0.1:8000/api/v1/scores')
      .then(response =>{
        this.scores = response.data;
      })
      .catch(error=>{
        console.log(error)
      });
      
    }
  }
})
</script>