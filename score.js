// Iteration 5: Store the player score and display it on the game over screen
let playagain =document.getElementById("play-again-button");
playagain.addEventListener("click",function playbutton(){
    window.location.href="./index.html"})
let score=localStorage.getItem("scoreValue");
document.getElementById("score-board").innerText=score;
