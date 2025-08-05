const ball   = document.getElementById('ball');
const timeEl = document.getElementById('time');
const scoreEl= document.getElementById('score');
const btn    = document.getElementById('start-btn');
const playfield = document.getElementById('playfield');

let score = 0, timeLeft = 30, timerId, moveId;

// Position the ball at a random spot inside the playfield
function moveBall() {
  const maxX = playfield.clientWidth  - ball.clientWidth;
  const maxY = playfield.clientHeight - ball.clientHeight;
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  ball.style.left = randomX + 'px';
  ball.style.top  = randomY + 'px';
}

// Update countdown every second
function countdown() {
  timeLeft--;
  timeEl.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timerId);
    clearInterval(moveId);
    ball.style.display = 'none';
    btn.disabled = false;
    btn.textContent = 'Play Again';
  }
}

// Handler for clicking the ball
ball.addEventListener('click', () => {
  score++;
  scoreEl.textContent = score;
  moveBall();
});

// Start or restart the game
btn.addEventListener('click', () => {
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft;
  btn.disabled = true;
  ball.style.display = 'block';
  moveBall();

  // move ball every 800ms and count down each second
  moveId  = setInterval(moveBall, 800);
  timerId = setInterval(countdown, 1000);
});
