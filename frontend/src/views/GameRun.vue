<template>
  .
</template>


<script setup lang="ts">
class Obstacle {
  constructor(public x: number, public y: number, public width: number, public height: number) {}
}
import axios from "axios";
import {useStore} from 'vuex';

const character = {
  x: 200,
  y: 350,
  width: 50,
  height: 50,
  backgroundColor: "#ffffff"
};

let isJumping = false;
let jumpHeight = 200;
let jumpSpeedU = 16;
let jumpSpeedD = 8;
let jumpCount = 0;
let username= localStorage.getItem("username")

function jump() {
  if (!isJumping) {
    isJumping = true;
    jumpCount = 0;
    jumpUp();
  }
}

function jumpUp() {
  if (jumpCount < jumpHeight) {
    character.y -= jumpSpeedU;
    jumpCount += jumpSpeedU;
    requestAnimationFrame(jumpUp);
  } else {
    jumpDown();
  }
}

function jumpDown() {
  if (jumpCount > 0) {
    character.y += jumpSpeedD;
    jumpCount -= jumpSpeedD;
    requestAnimationFrame(jumpDown);
  } else {
    isJumping = false;
  }
}

const keys: { [key: string]: boolean } = {};

document.addEventListener("keydown", function(event) {
  keys[event.key] = true;

  if (event.code === "Space") {
    jump();
  }
});

document.addEventListener("keyup", function(event) {
  keys[event.key] = false;

  if (event.code === "Enter") {
    location.reload();
  }
});


class RunnerGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private obstacles: Obstacle[];
  private isGameOver: boolean;
  private score: number;
  private scoreInterval: number | null;

  constructor() {
    this.isGameOver = false;
    this.canvas = document.createElement("canvas");
    this.canvas.setAttribute("id", "runner-canvas");
    this.canvas.width = 800;
    this.canvas.height = 400;
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.obstacles = [];
    this.score = 0;
    this.scoreInterval = null;
  }

  generateObstacle() {
    const minWidth = 20;
    const maxWidth = 50;
    const minHeight = 20;
    const maxHeight = 100;
    const x = this.canvas.width;
    const width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    const height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    const y = this.canvas.height - height;
    this.obstacles.push(new Obstacle(x, y, width, height));
  }

  drawObstacles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = character.backgroundColor;
    this.ctx.fillRect(character.x, character.y, character.width, character.height);
    this.ctx.fillStyle = "#ffffff";
    this.ctx.font = "20px Arial";
    this.ctx.textAlign = "left";
    this.ctx.fillText(`Score: ${this.score}`, 50, 50);
    for (const obstacle of this.obstacles) {
      this.ctx.fillStyle = "#c2d6e7";
      this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }
  }


  updateObstacles() {
    for (const obstacle of this.obstacles) {
      obstacle.x -= 5;
      if (obstacle.x + obstacle.width < 0) {
        this.obstacles.splice(this.obstacles.indexOf(obstacle), 1);
      }

      if
      (
          character.x < obstacle.x + obstacle.width &&
          character.x + character.width > obstacle.x &&
          character.y < obstacle.y + obstacle.height &&
          character.y + character.height > obstacle.y
      )
      {
        this.isGameOver = true;
      }
      else if
      (
          character.x < 0 ||
          character.x + character.width > this.canvas.width
      )
      {
        this.isGameOver = true;
      }

    }
    if (keys["a"] || keys["A"] ) {
      character.x -= 5;
    } else if (keys["d"] || keys["D"] ) {
      character.x += 5;
    }
    if ( Math.random() < 0.015 ) {
      this.generateObstacle();
    }


  }

  gameLoop() {
    if (this.isGameOver) {
      this.ConnectToServer()
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "#93a7b6";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "#0e1f33";
      this.ctx.font = "30px Arial";
      this.ctx.textAlign = "center";
      this.ctx.fillText("Oh no, you lose. Press ENTER to restart", this.canvas.width/2, this.canvas.height/2-70);

      return;
    }
    this.drawObstacles();
    this.updateObstacles();

    requestAnimationFrame(this.gameLoop.bind(this));
  }

  start() {
    if (!this.isGameOver) {
      requestAnimationFrame(this.gameLoop.bind(this));
      this.score = 0;
      this.scoreInterval = setInterval(() => {
        this.score += 1;
      }, 100);
    }
  }
  ConnectToServer(){
    
    const ScoreData = {
        "user": {
          "username": username
        },
        "score": this.score
      };
      axios.get(`http://127.0.0.1:8000/api/v1/scores/${username}/`)
      .then(response => {
        if(response.data.score < this.score){
          const NewScore={
            score:this.score
          } 
          axios.put(`http://127.0.0.1:8000/api/v1/scores/${username}/`,NewScore)
        }
      })
      .catch(error=>{
        
        axios.post('http://127.0.0.1:8000/api/v1/scores/',ScoreData)
        .then(response =>{
          console.log("Новый рекорд!",response.data);
        })
        .catch(error=>{
          console.log(error);
        })
      })
  }
}

const game = new RunnerGame();
game.start();

</script>

<style>
body {
  background-color: #0e1f33;
  overflow: hidden;
}
canvas{
  background-image: url("../assets/bacBackground.png");
  border: 10px solid #030a28;
  border-radius: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-left: 0;
  margin-top: 50px;
  padding-right: 0;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 50%;
}

</style>