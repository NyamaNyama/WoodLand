<template>
    <div class="FirstRow">
        <img class="infoImgSh" src="../assets/buttonA.png" alt="buttonLeft">
        <img class="infoImgSh" src="../assets/buttonD.png" alt="buttonRight">
    </div>
    <div class="SecondRow">
        <img class="infoImgLn" src="../assets/buttonSp.png" alt="buttonJump">
        <img class="infoImgLn" src="../assets/buttonEn.png" alt="buttonRestart">
    </div>
</template>


<script setup lang="ts">
</script>

<style>
.FirstRow{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.SecondRow{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.infoImgSh {
  width: 12vh;
  padding: 6vh;
}

.infoImgLn {
  width: 30vh;
  padding-bottom: 4vh;
}
</style>