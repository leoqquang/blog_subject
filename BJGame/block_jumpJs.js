const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const startMenu = document.getElementById('startMenu');
    const startButton = document.getElementById('startButton');
    const scoreDiv = document.getElementById('score');

    let running = false;
    let score = 0;

    const player = { x: 50, y: 250, w: 20, h: 20, dx: 0, dy: 0, speed: 4, jumpPower: -12 };
    const gravity = 0.6;
    const block = { x: 600, y: 250, w: 20, h: 20, speed: 3 };

    function resetGame() {
      score = 0;
      player.x = 50; player.y = 250; player.dx = player.dy = 0;
      block.x = canvas.width;
    }

    function startGame() {
      running = true;
      startMenu.style.display = 'none';
      resetGame();
      requestAnimationFrame(gameLoop);
    }

    function endGame() {
      running = false;
      alert(`Game Over! Score: ${score}`);
      startMenu.style.display = 'flex';
    }

    document.addEventListener('keydown', e => {
      if (!running) return;
      if (e.code === 'ArrowRight') player.dx = player.speed;
      if (e.code === 'ArrowLeft') player.dx = -player.speed;
      if (e.code === 'Space' && player.dy === 0) player.dy = player.jumpPower;
    });
    document.addEventListener('keyup', e => {
      if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') player.dx = 0;
    });

    function gameLoop() {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move player
      player.dy += gravity;
      player.x += player.dx;
      player.y += player.dy;
      if (player.y > canvas.height - player.h) {
        player.y = canvas.height - player.h;
        player.dy = 0;
      }

      // Move block
      block.x -= block.speed;
      if (block.x + block.w < 0) {
        block.x = canvas.width;
        score++;
      }

      // Collision detection
      if (
        player.x < block.x + block.w &&
        player.x + player.w > block.x &&
        player.y < block.y + block.h &&
        player.y + player.h > block.y
      ) {
        return endGame();
      }

      // Draw player and block
      ctx.fillStyle = 'blue';
      ctx.fillRect(player.x, player.y, player.w, player.h);
      ctx.fillStyle = 'red';
      ctx.fillRect(block.x, block.y, block.w, block.h);

// Score update
 scoreDiv.textContent = `Score: ${score}`;
requestAnimationFrame(gameLoop);
}
 startButton.addEventListener('click', startGame);