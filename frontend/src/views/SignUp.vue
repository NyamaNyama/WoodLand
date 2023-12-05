<template>
    <div class="authorize-page">
            <h2>Sign up</h2>
            <form @submit.prevent="submitForm">
              <div class="user-box">
                <label>Username</label>
                <input class="input" type="username" name="username" v-model="username"> <br><br>
              </div>
              <div class="user-box">
                <label>Password</label>
                <input class="input" type="password" name="password" v-model="password">
              </div>
                <button type="submit" id = "signup">Sign up</button>
            </form>
    </div>
</template>

<script >
import axios from 'axios';

export default{
    name:'SignUp',
    data(){
        return {
            username: '',
            password: '',
        }
    },
    methods:{
        submitForm(){
            const formData= {
                username: this.username,
                password:this.password,
            }
            axios
            .post('/api/v1/users/',formData)
            .then(response => {
                console.log(response)
                this.$router.push('/log-in')
            })
            .catch(error =>{
                console.log(error)
            })
            
        }
        
    }
}   
</script>

<style>
.authorize-page {
  max-width: 400px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 10px;
  color: #aabfcf;
}

form {
  display: flex;
  flex-direction: column;
  background-color: rgba(7, 10, 26, 0.65);
  border-radius: 20px;
}

.user-box{
  display: grid;
  margin-top:20px;
  justify-content: center;
}

.input {
  font-size: 15px;
  padding: 10px;
  border: 3px solid #88a0b6;
  border-radius: 20px;
  width: 300px;
}

label {
  position: relative;
  color: #ffffff;
  pointer-events: none;
}


#signup {
  margin-top: 40px;
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

#signup:hover {
  background-color: #677ec3;
}
</style>