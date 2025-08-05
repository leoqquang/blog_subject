function jump() {
if (!character.classList.contains("animate")) {
    character.classList.add("animate");
 setTimeout(() => {
character.classList.remove("animate");
 }, 500);
 }
}

document.addEventListener("DOMContentLoaded", function () {
var character = document.getElementById("character");
 var block = document.getElementById("block");
 var scoreDisplay = document.getElementById("score");
var startBtn = document.getElementById("startBtn");
var score = 0;
var gameStarted = false;
var scoreInterval;

function checkCollision() {
     let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

if (blockLeft < 120 && blockLeft > 80 && characterTop >= 130) {
            block.style.animation = "none";
             block.offsetHeight; // Trigger reflow
             block.style.display = "none";
            alert("Game Over! Final Score: " + score);
             clearInterval(scoreInterval);
             gameStarted = false;
            }
 }

startBtn.addEventListener("click", function () {
if (!gameStarted) {
 gameStarted = true;
block.style.display = "block";
 block.style.animation = "none";
 block.offsetHeight; // <-- Force reflow
 block.style.animation = "block 1s infinite linear";
 score = 0;
scoreDisplay.innerText = "Score: 0";

 scoreInterval = setInterval(function () {
 score++;
scoreDisplay.innerText = "Score: " + score;
checkCollision();
 }, 100);
 }
});

document.addEventListener("click", jump);
});