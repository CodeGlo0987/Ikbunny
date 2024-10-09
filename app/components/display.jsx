import React from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";
const Display = () => {
  return (
    <div className="Main_display">
      <ScrollAnimation
        animateIn="bounceInLeft"
        // duration={1}
        className="Displayitem Displayitem1"
      >
        <h2>WE CREATE AND SALE FURRY ART&apos;S</h2>

        <h1>
          {" "}
          <b>
            {" "}
            WE BRING <br />
          </b>
          FURRY ART TO
          <br />
          <span>ANOTHER LEVEL</span>
        </h1>
        <p>
          Our mission is to celebrate the furry community by providing
          high-quality, custom-made fursuits that allow individuals to express
          their unique identities.
        </p>
        <Link href={"/ContactUs"}>
          <button className="Displaybtn" alt="tony stark">
            <i>C</i>
            <i>o</i>
            <i>n</i>
            <i>t</i>
            <i>a</i>
            <i>c</i>
            <i>t</i>
            <i>U</i>
            <i>s</i>
          </button>
        </Link>
      </ScrollAnimation>{" "}
      <ScrollAnimation
        duration={4}
        animateIn="bounceInRight"
        className="Displayitem Displayitem2"
      >
        <div className="Container noselect">
          <div className="canvas">
            <div className="tracker tr-1"></div>
            <div className="tracker tr-2"></div>
            <div className="tracker tr-3"></div>
            <div className="tracker tr-4"></div>
            <div className="tracker tr-5"></div>
            <div className="tracker tr-6"></div>
            <div className="tracker tr-7"></div>
            <div className="tracker tr-8"></div>
            <div className="tracker tr-9"></div>
            <div className="tracker tr-10"></div>
            <div className="tracker tr-11"></div>
            <div className="tracker tr-12"></div>
            <div className="tracker tr-13"></div>
            <div className="tracker tr-14"></div>
            <div className="tracker tr-15"></div>
            <div className="tracker tr-16"></div>
            <div className="tracker tr-17"></div>
            <div className="tracker tr-18"></div>
            <div className="tracker tr-19"></div>
            <div className="tracker tr-20"></div>
            <div className="tracker tr-21"></div>
            <div className="tracker tr-22"></div>
            <div className="tracker tr-23"></div>
            <div className="tracker tr-24"></div>
            <div className="tracker tr-25"></div>
            <div id="card">
              <p id="prompt"></p>
              <div className="title">
                <img src="prince fury.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="Container noselect">
          <div className="canvas">
            <div className="tracker tr-1"></div>
            <div className="tracker tr-2"></div>
            <div className="tracker tr-3"></div>
            <div className="tracker tr-4"></div>
            <div className="tracker tr-5"></div>
            <div className="tracker tr-6"></div>
            <div className="tracker tr-7"></div>
            <div className="tracker tr-8"></div>
            <div className="tracker tr-9"></div>
            <div className="tracker tr-10"></div>
            <div className="tracker tr-11"></div>
            <div className="tracker tr-12"></div>
            <div className="tracker tr-13"></div>
            <div className="tracker tr-14"></div>
            <div className="tracker tr-15"></div>
            <div className="tracker tr-16"></div>
            <div className="tracker tr-17"></div>
            <div className="tracker tr-18"></div>
            <div className="tracker tr-19"></div>
            <div className="tracker tr-20"></div>
            <div className="tracker tr-21"></div>
            <div className="tracker tr-22"></div>
            <div className="tracker tr-23"></div>
            <div className="tracker tr-24"></div>
            <div className="tracker tr-25"></div>
            <div id="card">
              <p id="prompt"></p>
              <div className="title">
                <img src="red furry.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Display;
