import Header from "./Components/Header";
import Countdown from "./Components/Countdown";
import Footer from "./Components/Footer";
import Released from "./Components/Released";

import { useSpring, animated, config } from "react-spring";

function App() {
  const props = useSpring({
    from: { opacity: 0, scale: 1.1 },
    to: { opacity: 1, scale: 1 },
    reset: true,
    config: config.molasses,
  });

  return (
    <div className="viewport-header">
      <div className="container">
        <animated.div style={props}>
          <Header />
          <Countdown />
        </animated.div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
