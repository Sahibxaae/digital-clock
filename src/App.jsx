import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime,setCurrentTime] = useState(new Date());
  useEffect(()=>{
    const time = setInterval(() => {
      setCurrentTime(new Date)
    }, 1000);
  },[])
  
  const formatTimeLeadWithZero = (num)=>{
    return num < 10 ? `0${num}`:num;
  }
  const formatHour = (hour) =>{
    return hour === 0 ? 12 : hour>12 ? hour - 12 : hour;
  }
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return (
    <>
      <div className="digital-clk">
        <h1>Digital clock</h1>
        <div className="time">{formatTimeLeadWithZero(formatHour(currentTime.getHours()))}:
        {formatTimeLeadWithZero(currentTime.getMinutes())}:
        {formatTimeLeadWithZero(currentTime.getSeconds())}
        </div>
        <div className="date">{days[currentTime.getDay()]}, {month[currentTime.getMonth()]}, {formatTimeLeadWithZero((currentTime.getDate()))}, {currentTime.getUTCFullYear()}</div>
      </div>
    </>
  )
}

export default App
