class Obstacle {
    constructor(public x: number, public y: number, public width: number, public height: number) {}
}

const characterImage = new Image();
characterImage.src = "CAT.jpg";

const character = {
    x: 200,
    y: 350,
    width: 50,
    height: 50,
    image: characterImage
};

let isJumping = false;
let jumpHeight = 200;
let jumpSpeedU = 16;
let jumpSpeedD = 8;
let jumpCount = 0;

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
document.addEventListener("keydown", (event) => {
    keys[event.key] = true;
    document.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            jump();
        }
    });
});
document.addEventListener("keyup", (event) => {
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
    constructor() {
        this.isGameOver = false;
        this.canvas = document.createElement("canvas");
        this.canvas.width = 800;
        this.canvas.height = 400;
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.obstacles = [];
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
        this.ctx.fillRect(character.x, character.y, character.width, character.height);
        this.ctx.drawImage(character.image, character.x, character.y, character.width, character.height);

        for (const obstacle of this.obstacles) {
            this.ctx.fillStyle = "#d8d7ee";
            this.ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        }
    }

    updateObstacles() {
        for (const obstacle of this.obstacles) {
            obstacle.x -= 5;
            if (obstacle.x + obstacle.width < 0) {
                this.obstacles.splice(this.obstacles.indexOf(obstacle), 1);
            }
            // Проверка столкновения персонажа с препятствием
            if (
                character.x < obstacle.x + obstacle.width &&
                character.x + character.width > obstacle.x &&
                character.y < obstacle.y + obstacle.height &&
                character.y + character.height > obstacle.y
            ) {
                this.isGameOver = true;
            }

        }
        if (keys["a"] || keys["A"] ) {
            character.x -= 5;
        } else if (keys["d"] || keys["D"] ) {
            character.x += 5;
        }
        //
        // if (this.obstacles.length === 0 || this.obstacles[this.obstacles.length - 1].x < this.canvas.width - 500) {
        //     this.generateObstacle();
        // }
        if ( Math.random() < 0.015 ) {
            this.generateObstacle();
        }


    }

    gameLoop() {
        if (this.isGameOver) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = "#93a7b6";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.fillStyle = "#0e1f33";
            this.ctx.font = "30px Arial";
            this.ctx.textAlign = "center";
            this.ctx.fillText("OH NOOU u loooooose silly cat", this.canvas.width/2, this.canvas.height/2);

            const restartButton = document.createElement("button");
            restartButton.innerText = "maybe again?";

            restartButton.style.position = "absolute";
            restartButton.style.top = "50%";
            restartButton.style.left = "50%";
            restartButton.style.transform = "translate(-50%, -50%)";

            restartButton.addEventListener("click", () => {
                location.reload();
            });

            document.body.appendChild(restartButton);

            return;
        }
        this.drawObstacles();
        this.updateObstacles();

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    start() {
        if (!this.isGameOver) {
            requestAnimationFrame(this.gameLoop.bind(this));
        }
    }

}


const game = new RunnerGame();
game.start();

