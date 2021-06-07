import { useSpring, animated } from "react-spring";
const Seconds = ({ calcSeconds, delta }) => {
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
      <div className="row">
        <div className="col text-end p-0">
          <animated.h1
            style={calcSeconds(delta)[1] === "9" ? props : console.log()}
          >
            {calcSeconds(delta)[0]}
          </animated.h1>
        </div>
        <div className="col text-start p-0">
          <animated.h1 style={props}>{calcSeconds(delta)[1]}</animated.h1>
        </div>
      </div>
      <h6 className="time text-uppercase">Seconds</h6>
    </div>
  );
};

export default Seconds;
