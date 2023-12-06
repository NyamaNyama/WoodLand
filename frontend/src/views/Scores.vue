<template>
    <div class="score">
      <h2>Leaderboard</h2>
      <ol class = "rounded" >
        
        <li v-for="(score,index) in scores" :key="index">
            <a href='#'>{{score.user.username}} : {{score.score}}</a>
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
<style>

.rounded {
  counter-reset: li;
  list-style:none;
  margin: 0 auto;
  padding: 0;
  width: 60%;
}
.rounded a {
  position: relative;
  display: block;
  padding: 10px 60px 10px 60px;
  margin: 10px;
  background: rgba(7, 10, 26, 0.69);
  color: #879fb5;
  font-weight: bold;
  text-decoration: none;
  border-radius: 20px;
  text-align: left;
}

.rounded a:before {
  content: counter(li);
  text-align: center;
  counter-increment: li;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -1.3em;
  background: #2d3e6e;
  height: 2em;
  width: 2em;
  line-height: 2em;
  border: 5px solid #677ec3;
  border-radius: 2em;
  transition: transform 3s;
}
.rounded a:hover {
  transform: scale(1.06);
}

</style>