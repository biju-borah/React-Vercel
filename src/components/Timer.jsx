// *Hooks*
import React, { useEffect, useState } from 'react'; //? React for the react fragment

// *CSS*
import "./Timer.css";

//! Date Format : Year, Month(0-11), Date, Hrs, Mins, Secs, Millisecs
let timeTo = new Date(2021, 7, 15, 0, 0, 0, 0);

let timeLimit = Math.floor( timeTo / 1000);

//? Days is left as 100 for 2 digit days
const timeIntervals = [60, 60, 24, 100],
      timeIntervalName = ["Days", "Hrs", "Mins", "Secs"]; //? In reverse order from timeIntervals

// *Countdown Timer Function*      
function countdown() {
  
  /*
  * timeNow is calculated every time countdown() is run, and difference is found.
  * Time left for each interval is found using forEach and timeIntervals
  */
  
  let timerDisplay = [0, 0, 0, 0]; //! Format: Days, Hrs, Mins, Secs
  
  const timeNow = Math.floor(Date.now() / 1000);
  let timeDiff = timeLimit - timeNow;

  if(timeDiff < 0) {
    timerDisplay = ["Event Coming Soon!"];
  } else {
    timeIntervals.forEach((interval, index)=> {
      timerDisplay[index] = `${timeDiff % interval}`.padStart(2, "0");
      timeDiff = Math.floor(timeDiff/ interval);
    });
  }

  return timerDisplay;
}

// *Timer Component*
const Timer = () => {

  // *Use State variables*
  let [display, setDisplay] = useState([0, 0, 0, 0]);

  useEffect(()=> {
    const timerInt = setInterval(()=> {
      let displayList = countdown();

      setDisplay(displayList.reverse());
      // ?Reverse since in countdown(), secs is first, and so on

      if(displayList.length === 1) clearInterval(timerInt); // *Stop interval when EXPIRED*
    }, 1000);

    return () => clearInterval(timerInt);
  }, []);

  return (
    <div className="home-sec" id="apply" style={{paddingTop:"0px"}}>
        <div className="timer-heading"
          style={{display: "flex",justifyContent: "center",alignItems: "center", width: "100%",backgroundColor: "#080808",height: "10vh"}}>
            <h2 style={{fontVariant:"small-caps",color: "white",fontWeight:"bold"}}>Electra Blitz Surge ends on <span className="bold">15/8/2021</span></h2>
        </div>
        <div id="timer">
          {display.length === 4 && display.map((interval, index) => {
            return(
              <React.Fragment key={index}>

                <div className="timer-int">
                  <div className="timer-int-value"><tt>{interval}</tt></div> {/* Time left in interval */}
                  <div className="timer-int-label">{timeIntervalName[index]}</div> {/* Interval name */}
                </div>
                {(index < display.length -1 && ((window.innerWidth < 1000 && index!==1) || window.innerWidth >= 1000)) && <div className="timer-int-colon">:</div>}

              </React.Fragment>
              )
          })}

        </div>
    </div>
  )
}

export default Timer;