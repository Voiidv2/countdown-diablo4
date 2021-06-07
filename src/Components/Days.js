import { useSpring, animated } from "react-spring";
const Days = ({ calcDays, calcHours, calcMinutes, calcSeconds, delta }) => {
  const props = useSpring({
    from: { opacity: 0, scale: 1 },
    to: { opacity: 1, scale: 1 },

    reset: true,
    config: {
      mass: 1,
      tension: 100,
      friction: 26,
      clamp: true,
      precision: 0.01,
      velocity: 0,
    },
    delay: 999,
  });
  return (
    <div className="col-md-3">
      <animated.h1
        style={
          calcSeconds(delta)[0] === "5" &&
          calcSeconds(delta)[1] === "9" &&
          calcMinutes(delta)[0] === "5" &&
          calcMinutes(delta)[1] === "9" &&
          calcHours(delta)[0] === "2" &&
          calcHours(delta)[1] === "3"
            ? props
            : console.log()
        }
        id="days"
      >
        {calcDays(delta)}
      </animated.h1>
      <h6 className="time text-uppercase">Days</h6>
    </div>
  );
};

export default Days;
