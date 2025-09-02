import { useEffect, useState } from "react";

function Clock(){
  const [time,setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    },1000);

    return () => {
      clearInterval(interval);
    }
  },[]);
  function formatTime(){
    let hours = padZero(time.getHours());
    const minutes = padZero( time.getMinutes());
    const second = padZero(time.getSeconds());
    const meridium = hours > 12 ? "pm" : "Am";
    
    hours = hours % 12 || 12;

    return `${padZero(hours)} : ${padZero(minutes)} : ${second}  ${meridium}`;
  }
  function padZero(number){
    return (number < 10) ? "0" + number : number;
  }
  return (
    <div className="main">
      <div className="date-container">
          <h2>{formatTime()}</h2>
      </div>
    </div>
  )
} 
export default Clock;