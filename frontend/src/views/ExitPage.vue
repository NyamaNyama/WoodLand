<template>
  <nav>
    <router-link to="/sign-up">Sign Up</router-link>
    <router-link to="/log-in">Log In</router-link>
  </nav>
  <router-view/>
  <div class="about">

    <div class="buttons">
      <button id="startG"> Start game </button>
      <button id = "Set"> Settings </button>
      <button id = "Exit"> Exit </button>
    </div>
  </div>
</template>


<script setup lang="ts">
</script>
<style>

.buttons{
  display: grid;
  justify-content: center;

}
button{
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 20px;
  font-weight: bold;
  color: #88a0b6;
  background-color: #191d2e;
  border: 3px solid #88a0b6;
  font-size: large;
}

</style>