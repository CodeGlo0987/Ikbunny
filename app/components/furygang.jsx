import React from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
const Furygang = () => {
  return (
    <ScrollAnimation
      animateIn="bounceInLeft"
      duration={2}
      className="Main_furygang"
    >
      <img src="gangfurrys.png" alt="" />
      <div className="furygangBottom">
        <div className="furygangcontent">
          <div className="furygangcontentitem">
            {" "}
            <h1>Furry Gang</h1>
          </div>
        </div>
        <img src="furrygangbottom.png" alt="" />
      </div>
    </ScrollAnimation>
  );
};

export default Furygang;
