

'use strict';
// global values to draw the black box 

const blockSize = 25;
const rows = 20;
const cols = 20;
let blackBox;
let context; 

// Snake Coordinates
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

let snakeSpeedX = 0;
let snakeSpeedY = 0;

// Snake Segement to make it grow
let snakeBody = [];

// the food
let foodX;
let foodY;

let gameOver = false;

const score = document.getElementById('score');
const highscore = document.getElementById('highscore');
const reset = document.getElementById('reset');
const restartBtn = document.getElementById('restart')


window.onload = function() {

    // to draw the box

    blackBox = document.getElementById("canvas");
    blackBox.height = cols * blockSize;
    blackBox.width = rows * blockSize;
    context = blackBox.getContext("2d"); 
    // placing food Randomly every Time when the page reload
    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10);
    highscore.textContent = localStorage.getItem("highscore") || 0; // get the high score from local storage or set it to 0 if it doesn't exist
    highscore.textContent = highscore.textContent; 
}

function update() {
    if (gameOver) {
        return;
    }

    // general sytles for the food and the blackBox

    context.fillStyle = "black";
    context.fillRect(0, 0, blackBox.width, blackBox.height);

    context.fillStyle = "gold";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    // the conditions if the food is eaten, if the conditions are true then snake body are going to expand
    // and the function placeFood will be called to generate the food in a random place on the blackBox

    if (snakeX === foodX && snakeY === foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
        counter();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "green";
    snakeX += snakeSpeedX * blockSize;
    snakeY += snakeSpeedY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    // The Game over conditions here we are checking wether the snake is overpass the entire Box

    if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
        gameOver = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }
}

function changeDirection(e) {

    if (e.code == "ArrowUp" && snakeSpeedY != 1) {
        snakeSpeedX = 0;
        snakeSpeedY = -1;
    }
    else if (e.code == "ArrowDown" && snakeSpeedY != -1) {
        snakeSpeedX = 0;
        snakeSpeedY = 1;
    }
    else if (e.code == "ArrowLeft" && snakeSpeedX != 1) {
        snakeSpeedX = -1;
        snakeSpeedY = 0;
    }
    else if (e.code == "ArrowRight" && snakeSpeedX != -1) {
        snakeSpeedX = 1;
        snakeSpeedY = 0;
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}


function counter() {
    score.textContent = parseInt(score.textContent) + 1;
    if(parseInt(score.textContent) > highscore.textContent){
        highscore.textContent = parseInt(score.textContent);
        localStorage.setItem("highscore", highscore.textContent); // save the high score to local storage
        highscore.textContent = highscore.textContent; // update the high score displayed on the page
    }
}

function resetHighScore() {
    highscore.textContent = 0;
}
reset.addEventListener('click', resetHighScore)

function restartGame() {
    // reset all the variables to their initial values
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    snakeSpeedX = 0;
    snakeSpeedY = 0;
    snakeBody = [];
    placeFood();
    gameOver = false;
    score.textContent = 0;
}
restartBtn.addEventListener('click', restartGame)