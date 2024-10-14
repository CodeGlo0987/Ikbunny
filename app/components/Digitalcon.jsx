import React from "react";
import { FaCircle } from "react-icons/fa6";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

const Digitalcon = () => {
  return (
    <div className="MainDigitalcontainer overflow-hidden	">
      <div className="Digitalcontainer">
        <div className="image-container">
          <ScrollAnimation duration={1} animateIn="bounceInLeft">
            <img
              alt="Cartoon dog character in a circular background with orange and purple colors"
              height="400"
              src="sideimg.webp"
              width="400"
            />
          </ScrollAnimation>
        </div>
        <div className="Digitalcontent">
          <h2>Yes we do sell Nft</h2>
          <h1>Where do we sell our Furry Art ?</h1>
          <p>
            we offer a range of services designed to meet the needs of every
            furry enthusiast. Our custom fursuit commissions start with a
            thorough design consultation, where we work closely with you to
            understand your vision and preferences.
          </p>
          <ul>
            <li className="opensea">
              <span>
                <i className="fas fa-circle">
                  <FaCircle />
                </i>{" "}
                OpenSea
              </span>
            </li>
            <li className="rarible">
              <span>
                <i className="fas fa-circle">
                  <FaCircle />
                </i>{" "}
                Rarible
              </span>
            </li>
            <li className="superrare">
              <span>
                <i className="fas fa-circle">
                  <FaCircle />
                </i>{" "}
                Super rare
              </span>
            </li>
            <li className="niftygateway">
              <span>
                <i className="fas fa-circle">
                  <FaCircle />
                </i>{" "}
                Nifty Gateway
              </span>
            </li>
            <li className="foundation">
              <span>
                <i className="fas fa-circle">
                  <FaCircle />
                </i>{" "}
                Foundation
              </span>
            </li>
            <li className="sorare">
              <span>
                <i className="fas fa-circle">
                  <FaCircle />
                </i>{" "}
                Sorare
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Digitalcon;
