import React, { useEffect, useState, useRef } from "react";

const Countdown = () => {
  const releaseDate = new Date("Jun 17, 2021 12:50:00").getTime();
  const now = new Date().getTime();
  const delta = releaseDate - now;

  const [days, setDays] = useState(Math.floor(delta / (1000 * 60 * 60 * 24)));
  const [hours, setHours] = useState(Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const [minutes, setMinutes] = useState(Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60)));
  const [seconds, setSeconds] = useState(Math.floor((delta % (1000 * 60)) / 1000));

  let interval = useRef();

  const countdown = (date) => {
    const releaseDate = new Date(date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const delta = releaseDate - now;

      const days = Math.floor(delta / (1000 * 60 * 60 * 24));
      const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((delta % (1000 * 60)) / 1000);

      if (delta < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };
  console.log(delta);
  useEffect(() => {
    countdown("Jun 17, 2021 12:50:00");
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      {" "}
      {delta > 0 ? (
        <div className="row align-items-center text-center text-uppercase">
          <div className="col-sm">
            <h1>{days}</h1>
            <h6>Days</h6>
          </div>
          <div className="col-sm">
            <h1>{hours}</h1>
            <h6>Hours</h6>
          </div>
          <div className="col-sm">
            <h1>{minutes}</h1>
            <h6>Minutes</h6>
          </div>
          <div className="col-sm">
            <h1>{seconds}</h1>
            <h6>Seconds</h6>
          </div>
        </div>
      ) : (
        <div className="row align-items-center text-center text-uppercase">
          <div className="col-sm">
            <h6>Diablo IV has been released</h6>
          </div>
        </div>
      )}
    </>
  );
};
export default Countdown;
