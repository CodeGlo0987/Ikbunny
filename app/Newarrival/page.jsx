import React from "react";
import Footer from "../components/footere";
import Link from "next/link";
import Navbar from "../components/navbar";
import Display2 from "../components/display2";
import { FaCircle } from "react-icons/fa";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center	 justify-center	">
      <Navbar />
      <div className="custom-header">
        <div className="custom-header-content">
          <h1>Brand New Collection</h1>
          <div className="custom-breadcrumb">
            <Link href={"/"}>Home</Link> New Arrival
          </div>
        </div>
      </div>
      <div className="Mainbody pb-44">
        <div className="furu-1">
          <div className="container-fury">
            <div className="left-fury">
              <h2>Inspiration behind Gorilla Join The Ride</h2>
              <p>
                At ikbunny, the inspiration for our latest creation, Gorilla
                Join The Ride, stems from a deep appreciation for adventure,
                playfulness, and the incredible spirit of exploration that
                defines the furry community. This concept was born out of the
                desire to blend whimsical character design with an engaging
                narrative that resonates with furries and fans alike.
              </p>
              <p>
                The image of a gorilla represents strength, curiosity, and a
                sense of fun. We wanted to capture the essence of embarking on
                an adventure, inviting others to join in the excitement.
              </p>
              <h3>How much copies?</h3>
              <p>
                At ikbunny, we believe in maintaining exclusivity and quality
                for our creations. For Gorilla Join The Ride, we have limited
                the production to 2000 copies.
              </p>
              <h3>Where do we sell ?</h3>
              <div className="fury-icon">
                <ul className="market-list-about-section-1">
                  <li>
                    <i className="fas fa-circle orange-about-section-1">
                      <FaCircle />
                    </i>{" "}
                    OpenSea
                  </li>
                  <li>
                    <i className="fas fa-circle orange-about-section-1">
                      <FaCircle />
                    </i>{" "}
                    Rarible
                  </li>
                  <li>
                    <i className="fas fa-circle orange-about-section-1">
                      <FaCircle />
                    </i>{" "}
                    Super rare
                  </li>
                </ul>
                <ul className="market-list-about-section-1">
                  <li>
                    <i className="fas fa-circle purple-about-section-1">
                      <FaCircle />
                    </i>{" "}
                    Nifty Gateway
                  </li>
                  <li>
                    <i className="fas fa-circle purple-about-section-1">
                      <FaCircle />
                    </i>{" "}
                    Foundation
                  </li>
                  <li>
                    <i className="fas fa-circle purple-about-section-1">
                      <FaCircle />
                    </i>{" "}
                    Sorare
                  </li>
                </ul>
              </div>
            </div>
            <div className="right-fury">
              <h1>Gorilla Join The Ride</h1>
              <img
                alt="Cartoon of a gorilla on top of a car with a scared driver inside"
                height="400"
                src="PanNgD.png"
                width="400"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <Display2 className="newaidisplay"></Display2>
      <Footer />
    </div>
  );
};

export default Page;
