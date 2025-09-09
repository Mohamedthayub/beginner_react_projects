const displayHours = document.querySelector(".hours");
const displayMinutes = document.querySelector(".minutes");
const displaySeconds  = document.querySelector(".seconds");
const displayDay = document.querySelector(".day");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");

let second = 0;
let minute = 0;
let hour = 0;
let day = 0;

let timer = null;

function addZero(num){
    return num < 10 ? ":" + "0" + num : ":" +  num ;
}
function  startTimer(){
    startButton.disabled = true;
    timer = setInterval(() => {
        second++;
        if(day){
            displayDay.innerText = `${day} day ${minute} minutes ${second} seconds`;
        }
        if(hour == 24){
            day++;
            hour = 1;
        }
        if(minute == 59){
            hour++;
            minute = 0;
        }
        if(second == 59){
            minute++;
            second = 0;
        }
        displayHours.innerText = "0" + hour;
        displayMinutes.innerText = addZero(minute);
        displaySeconds.innerText = addZero(second);
        
    },1000);
}

function  stopTimer(){
    if(timer){
        clearInterval(timer);
    }
    startButton.disabled = false;
}
function resetTimer(){
    stopTimer();
    hour = "00"+ " " + ":";
    minute = "00" + " " + ":";
    second = "00";
    timer = null;
    displayHours.innerText = hour;
    displayMinutes.innerText = minute;
    displaySeconds.innerText = second;
    startButton.disabled = false;
}
startButton.addEventListener("click",startTimer);
stopButton.addEventListener("click",stopTimer);
resetButton.addEventListener("click",resetTimer);