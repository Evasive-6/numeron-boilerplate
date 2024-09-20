// Iteration 2: Generate 2 random number and display it on the screen
let n1=Math.floor(Math.random()*100);
let n2=Math.floor(Math.random()*100);

let box1=document.getElementById("number1");
let box2=document.getElementById("number2");


box1.textContent=n1;
box2.textContent=n2;

// Iteration 3: Make the options button functional

let lesserThan = document.getElementById("lesser-than");
let greaterThan = document.getElementById("greater-than");
let equalTo = document.getElementById("equal-to");


function generateRandomNos(){
    n1=Math.floor(Math.random()*100);
    n2=Math.floor(Math.random()*100);

    box1.textContent=n1;
    box2.textContent=n2;
}

let score=0;

greaterThan.onclick=()=>{
    if (n1>n2){
        score++;
        
        resettimer();
    }else{
        location.href="./gameover.html";
    }
    generateRandomNos();
    console.log(greaterThan);
}

lesserThan.onclick=()=>{
    if (n1<n2){
        score++;
        
        resettimer();
    }else{
        location.href="./gameover.html";
    }
    generateRandomNos();
    console.log(lesserThan);
}

equalTo.onclick=()=>{
    if (n1==n2){
        score++;
        
        resettimer();
    }else{
        location.href="./gameover.html";
    }
    generateRandomNos();
    console.log(equalTo);
}



// Iteration 4: Build a timer for the game
let time=6;
let timer;
function startTimer(){
    timer=setInterval(function(){
        time--;
        if(time==0){
            location.href="./gameover.html";
        }
        let timeBox=document.getElementById("timer");
        timeBox.textContent=time;
        localStorage.setItem("scoreValue",score)
    },1000)
}
function resettimer(){
    clearInterval(timer);
    time=6;
    startTimer();
}
startTimer();


