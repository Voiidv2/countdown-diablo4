import React, { useEffect, useState } from "react";
// import { useSpring, animated } from "react-spring";
import Days from "./Days";
import Hours from "./Hours";
import Minutes from "./Minutes";
import Seconds from "./Seconds";

const Countdown = () => {
  // Release date of Diablo IV
  const releaseDate = Math.floor(
    new Date("Jun 7, 2021 11:00:00").getTime() / 1000
  );
  // Get current time
  const now = Math.floor(new Date().getTime() / 1000);
  // Calculate the difference between the release date and current time and divide by 1000 to convert it to seconds
  const delta = Math.floor(releaseDate - now);

  const calcDays = () => {
    let days = Math.floor(timeLeft / (60 * 60 * 24));
    return days;
  };
  console.log(delta);
  const calcHours = () => {
    let hours = Math.floor((timeLeft / (60 * 60)) % 24);
    let splitHours = ("" + hours).split("");
    if (splitHours.length < 2) {
      splitHours.unshift("0");
      return splitHours;
    } else {
      return splitHours;
    }
  };

  const calcMinutes = () => {
    let minutes = Math.floor((timeLeft / 60) % 60);
    let splitMinutes = ("" + minutes).split("");
    if (splitMinutes.length < 2) {
      splitMinutes.unshift("0");
      return splitMinutes;
    } else {
      return splitMinutes;
    }
  };

  const calcSeconds = () => {
    let seconds = Math.floor(timeLeft % 60);
    let splitSeconds = ("" + seconds).split("");
    if (splitSeconds.length < 2) {
      splitSeconds.unshift("0");
      return splitSeconds;
    } else {
      return splitSeconds;
    }
  };
  const [timeLeft, setTimeLeft] = useState(delta + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(delta);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="row justify-content-center text-center">
      {delta > 0 ? (
        <h6 className="text-uppercase">Diablo IV has been released</h6>
      ) : (
        <div>
          {" "}
          <Days
            calcDays={calcDays}
            calcHours={calcHours}
            calcMinutes={calcMinutes}
            calcSeconds={calcSeconds}
            delta={delta}
          />
          <Hours
            calcHours={calcHours}
            calcMinutes={calcMinutes}
            calcSeconds={calcSeconds}
            delta={delta}
          />
          <Minutes
            calcMinutes={calcMinutes}
            calcSeconds={calcSeconds}
            delta={delta}
          />
          <Seconds calcSeconds={calcSeconds} delta={delta} />
        </div>
      )}
    </div>
  );
};

export default Countdown;
