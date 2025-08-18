

function  setTime(){


const date = new Date();
const hour = date.getHours();

const minutes = date.getMinutes();

const second = date.getSeconds();

console.log( hour + " " + minutes + " " + second)
}


setInterval(setTime,1000);