<template>

  <nav id = "playLink">
    
    <router-link to="/sign-up">Sign Up</router-link>
    or
    <router-link to="/log-in">Log In</router-link>
  </nav>

  <router-view/>
</template>


<script setup lang="ts">

</script>
<style>

#playLink{
  margin: 10vh;
  grid-template-columns: 300px 50px 300px;
}
#playLink a{
  border-radius: 20px;
  font-weight: bold;
  color: #88a0b6;
  background-color: #191d2e;
  border: 3px solid #88a0b6;
  font-size: medium;
}


</style>