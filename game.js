const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('startGame');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');

let score = 0;
let time = 60;
let gameInterval;
let countdown;

function startGame() {
    score = 0;
    time = 60;
    scoreEl.textContent = score;
    timerEl.textContent = time;

    clearInterval(gameInterval);
    clearInterval(countdown);

    countdown = setInterval(() => {
        time--;
        timerEl.textContent = time;
        if(time <= 0) {
            clearInterval(countdown);
            clearInterval(gameInterval);
            alert('Время вышло! Ваш счёт: ' + score);
        }
    }, 1000);

    gameInterval = setInterval(drawGame, 1000/60);
}

function drawGame() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#ff4c60';
    ctx.fillRect(Math.random()*360, Math.random()*360, 40, 40);
}

canvas.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;
});

startBtn.addEventListener('click', startGame);
