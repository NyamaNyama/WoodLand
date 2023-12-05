<template>
    <div class="authorize-page">
            <h1>Log in</h1>
            <form @submit.prevent="submitForm">
              <div class="user-box">
                <label>Username:</label>
                <input class="input" type="username" name="username" v-model="username"> <br><br>
              </div>
              <div class="user-box">
                <label>Password:</label>
                <input class="input" type="password" name="password" v-model="password"> <br><br>
              </div>
                <button type="submit" id = "login">Log in</button>
            </form>
    </div>
</template>

<script>
import axios from 'axios';
import { toHandlerKey } from 'vue';

export default{
    name:'LogIn',
    data(){
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        submitForm(){
            axios
            .defaults.headers.common['Authorization']=''
            localStorage.removeItem("access")

            const formData={
                username: this.username,
                password:this.password
            }
            axios
            .post('/api/v1/jwt/create/',formData)
            .then(response => {
                const access =response.data.access
                const  refresh=response.data.refresh
                this.$store.commit('setAccess',access)
                this.$store.commit('setRefresh',refresh)
                axios.defaults.headers.common['Authorization'] = "JWT " + access
                localStorage.setItem("access",access)
                localStorage.setItem("refresh",refresh)
                this.$router.push("/")
            })
            .catch(error =>{
                console.log(error)
            })
            /*const ScoreData = {
                user:{username: this.username}
,
                score: 0,
            }
            axios
            .post('api/v1/scores/',ScoreData)
            .then(response=>{
               
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })*/

        }
    }
}
</script>

<style>

#login {
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #93a7b6;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 0 0 20px 20px;
  font-family: Andale Mono, monospace;
}

#login:hover {
  background-color: #677ec3;
}
</style>