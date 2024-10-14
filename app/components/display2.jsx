"use client";
import React, { useState } from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

const Display2 = () => {
  let [hoverimg, sethoverimg] = useState(true);
  console.log(hoverimg);

  return (
    <div className="Mian_Displat2 overflow-hidden	">
      <div className="radiusback">
        <div className="display2item display2item1">
          <>
            <div
              onMouseEnter={() => {
                sethoverimg(false);
              }}
              onMouseLeave={() => {
                sethoverimg(true);
              }}
              className="  cursor-pointer"
            >
              {/* {hoverimg ? ( */}
              <img
                src="furry 8.webp"
                alt=""
                className={`firsthover ${hoverimg ? "onhoverimg" : "onoutimg"}`}
              />
              {/* ) : ( */}
              <img
                src="couple furry.webp"
                alt=""
                className={`secondhover ${
                  !hoverimg ? "onhoverimg" : "onoutimg"
                }`}
              />
              {/* )} */}
            </div>
          </>
        </div>
        <ScrollAnimation
          duration={3}
          animateIn="bounceInRight"
          className="display2item display2item2"
        >
          <h2>We are IKBUNNY</h2>
          <h1>We Create</h1>
          <h1 className="displayuphead">Limited Furry Art</h1>
          <p>
            Ready to add something special to your collection? Browse our New
            Arrivals and contact us through our Contact page to start your
            order.
          </p>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Display2;
