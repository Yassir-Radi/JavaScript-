'use strict';

const blockSize = 25;
const rows = 20;
const cols = 20;

let snakeX, snakeY, snakeSpeedX, snakeSpeedY;
let snakeBody = [];
let foodX, foodY;
let gameOver = false;

const score = document.getElementById('score');
const highscore = document.getElementById('highscore');

const blackBox = document.getElementById('canvas');
blackBox.height = cols * blockSize;
blackBox.width = rows * blockSize;
const context = blackBox.getContext('2d');

highscore.textContent = localStorage.getItem('highscore') ?? 0;

reset.addEventListener('click', () => {
  highscore.textContent = 0;
});

restart.addEventListener('click', () => {
  initGame();
});

document.addEventListener('keyup', (e) => {
  const key = e.code;
  if (key.startsWith('Arrow')) {
    const [x, y] = key === 'ArrowUp' ? [0, -1] :
                    key === 'ArrowDown' ? [0, 1] :
                    key === 'ArrowLeft' ? [-1, 0] : [1, 0];
    if (x !== -snakeSpeedX || y !== -snakeSpeedY) {
      snakeSpeedX = x;
      snakeSpeedY = y;
    }
  }
});

function initGame() {
  snakeX = blockSize * 5;
  snakeY = blockSize * 5;
  snakeSpeedX = 0;
  snakeSpeedY = 0;
  snakeBody = [];
  placeFood();
  gameOver = false;
  score.textContent = 0;
}

function update() {
  if (gameOver) return;

  context.fillStyle = 'black';
  context.fillRect(0, 0, blackBox.width, blackBox.height);

  context.fillStyle = 'gold';
  context.fillRect(foodX, foodY, blockSize, blockSize);

  if (snakeX === foodX && snakeY === foodY) {
    snakeBody.push([foodX, foodY]);
    placeFood();
    score.textContent = parseInt(score.textContent) + 1;
    if (score.textContent > highscore.textContent) {
      highscore.textContent = score.textContent;
      localStorage.setItem('highscore', highscore.textContent);
    }
  }

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
  }

  if (snakeBody.length) {
    snakeBody[0] = [snakeX, snakeY];
  }

  context.fillStyle = 'green';
  snakeX += snakeSpeedX * blockSize;
  snakeY += snakeSpeedY * blockSize;
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  snakeBody.forEach(([x, y]) => {
    context.fillRect(x, y, blockSize, blockSize);
  });

  if (snakeX < 0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > rows * blockSize) {
    gameOver = true;
    alert('Game Over');
  }

  if (snakeBody.some(([x, y]) => x === snakeX && y === snakeY)) {
    gameOver = true;
    alert('Game Over');
  }
}

function placeFood() {
  foodX = Math.floor(Math.random() * cols) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

initGame();
setInterval(update, 1000 / 10);