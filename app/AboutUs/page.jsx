"use client";
import React from "react";
import { FaCircle } from "react-icons/fa";
import Navbar from "../components/navbar";
import Link from "next/link";
import Footer from "../components/footere";
import Display2 from "../components/display2";

const Page = () => {
  return (
    <div className="w-full  flex flex-col items-center	 justify-center	">
      <Navbar />
      <div className="custom-header">
        <div className="custom-header-content">
          <h1>About IKBUNNY</h1>
          <div className="custom-breadcrumb">
            <Link href={"/"}>Home</Link> About
          </div>
        </div>
      </div>
      <div className="Mainbody pb-44	">
        <div className="about">
          <div className="container-about-section">
            <div className="image-container-about-section">
              <img
                src="sideimg2.webp"
                alt="Cartoon chicken character in a dynamic pose"
                width="300"
                height="300"
              />
            </div>
            <div className="content-about-section">
              <h1>We are IKBUNNY</h1>
              <h2>
                We Create
                <br />
                Limited Furry Art
              </h2>
              <p>
                At IKBUNNY, we believe that every fursuit tells a story. Founded
                out of a love for the furry fandom, our journey began when we
                created our first suit for a local convention. Since then, we’ve
                been dedicated to crafting unique and personalized fursuits that
                resonate with their wearers. Our mission is to foster a sense of
                community through creativity, offering a space where individuals
                can embrace their alter egos and connect with others who share
                their passion
              </p>

              <div className="stats-about-section">
                <div className="stat-about-section">
                  <h3>327+</h3>
                  <p>Project Finish</p>
                </div>
                <div className="stat-about-section">
                  <h3>138+</h3>
                  <p>Happy Costumer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================

About Section 1 

========================== */}

        <div className="about-section-1">
          <div className="container-about-section-1">
            <div className="left-about-section-1">
              <p className="highlight-about-section-1">We do sell NFT</p>
              <h1>Yes we sell limited Furry Art on Market</h1>
              <p>
                We pride ourselves on using high-quality materials and
                innovative designs, ensuring that every suit is not only
                stunning but also comfortable and durable. Join us in
                celebrating the furry culture, one fursuit at a time!
              </p>
            </div>
            <div className="right-about-section-1">
              <h2>Where is it ?</h2>
              <p>
                In addition to all the great content, we’re committed to
                fostering community engagement. Consider adding forums or a
                comments section where visitors can share their thoughts and
                experiences.
              </p>
              {/* <div className='li-item'> */}
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
              {/* </div> */}
            </div>
          </div>
        </div>
        <Display2 />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
