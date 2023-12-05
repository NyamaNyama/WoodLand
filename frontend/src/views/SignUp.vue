<template>
    <div class="sign-up-page">
            <h2>Sign up</h2>
            <form @submit.prevent="submitForm">
              <div class="user-box">
                <input class="input" type="email" name="username" v-model="username">
                <label>Username</label>
              </div>
              <div class="user-box">
                <input class="input" type="password" name="password" v-model="password">
                <label>Password</label>
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
.sign-up-page {
  max-width: 400px;
  margin: 0 auto;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #93a7b6;
}

form {
  display: flex;
  flex-direction: column;
  background-color: rgba(7, 10, 26, 0.44);

}

.user-box{
  position: relative;
  margin-bottom: 30px;
}

.input {
  font-size: 10px;
  padding: 10px;
  border: 3px solid #88a0b6;
  border-radius: 20px;

}

label {
  position: absolute;
  top: 10vh;
  color: #333;
  pointer-events: none;
  transition: 0.2s;
}

.input:focus + label,
.input:not(:placeholder-shown) + label {
  transform: translateY(-20px);
  font-size: 12px;
  color: #777;
}

#signup {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #93a7b6;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

#signup:hover {
  background-color: #555;
}
</style>