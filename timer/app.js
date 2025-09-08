const timerDisplay = document.querySelector("#timer");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

let count = 0;
let timer = null;

function startTimer() {
    timer = setInterval(() => {
        count++
        timerDisplay.innerText  = count;
    },1000)
    startButton.disabled = true;
}


function stopTimer(){
    if(timer){
        clearInterval(timer);
    }
    startButton.disabled = false;
}

function  resetTimer(){
    if(timer){
        stopTimer();
    }
    count = 0;
    timer = null;
    timerDisplay.innerText = 0;
    startButton.disabled = false;
    
}

startButton.addEventListener("click",startTimer);
stopButton.addEventListener("click",stopTimer);
resetButton.addEventListener("click",resetTimer);