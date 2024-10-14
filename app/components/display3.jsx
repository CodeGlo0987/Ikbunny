import React from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

const Display3 = () => {
  return (
    <div className="Dislpay3_main overflow-hidden	">
      <ScrollAnimation
        duration={1}
        animateIn="bounceInLeft"
        className="Display3ietm"
      >
        <h2>All new arrival</h2>
        <h1 className="display3head">Our brand new</h1>
        <h1>Collection Furry Art</h1>
      </ScrollAnimation>
      <ScrollAnimation
        duration={1}
        animateIn="bounceInRight"
        className="Display3ietm"
      >
        <p>
          {" "}
          At ikbunny, we understand that every furry is unique. That’s why we
          offer custom commissions tailored to your vision. Browse through
          examples of our past projects for inspiration, and envision how we can
          bring your character to life.
        </p>
      </ScrollAnimation>
    </div>
  );
};

export default Display3;
