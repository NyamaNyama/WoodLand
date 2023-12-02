<template>
  <div class="home">
    <h1>Home</h1>
    <span :src="user_data">{{ user_data }}</span>
  </div>
</template>

<script >
import axios from 'axios';
import { defineComponent } from 'vue';
export default {
  name:'HomeView',
  data(){
    return {
      user_data: ''
    }
  },
  mounted(){
    this.getMe()
  },
  methods:{
    getMe(){
      axios
      .get("/api/v1/users/me")
      .then(response=>{
        console.log(response)
        this.user_data = response.data.username
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
}
</script>
