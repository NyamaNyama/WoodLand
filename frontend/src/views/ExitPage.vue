<template>
   <div class="exitPage">
     Are u sure?
   </div>
  <button id="buttonExit"> Yep </button>
</template>
<!--@click="closeApp"-->

<script setup lang="ts">
//import { defineComponent } from 'vue'
//
//const closeApp = () => {
//
//  window.close();
//}
//
//defineComponent({
//  setup() {
//    return {
//      closeApp
//    }
//  }
//})
</script>

<style>
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
.exitPage{
  font-size: 30px;
  margin-top: 10vh;
  padding: 2vh;
}
#buttonExit{
  width: 150px;
  transition: transform 1s;
}
#buttonExit:hover{
  transform: translate(30vh,30vh);
}
</style>

