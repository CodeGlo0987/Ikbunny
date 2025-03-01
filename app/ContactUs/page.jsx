import React from "react";
import Footer from "../components/footere";
import Link from "next/link";
import Navbar from "../components/navbar";
import HomeContct from "../components/Homeconatct";
import {
  FaBehance,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMap,
  FaPhone,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center	 justify-center	">
      <Navbar />
      {/* <div className="custom-header">
        <div className="custom-header-content">
          <h1>ContactUs</h1>
          <div className="custom-breadcrumb">
            <Link href={"/"}>Home</Link> ContactUs
          </div>
        </div>
      </div> */}
      <div className="Mainbody pt-24">
        <HomeContct />
        <div className="contact-containers">
          <div className="contact-sections">
            <div>
              <h2>Get in touch</h2>
              <p>
                where we share updates, behind-the-scenes content, and interact
                with our followers. Whether you&apos;re looking to start a
                commission or just want to chat about the furry fandom, we’re
                here to help!
              </p>
              <div className="contact-details">
                <i className="fas fa-phone-alt">
                  <FaPhone />
                </i>
                <span>+447706413238</span>
              </div>
              <div className="contact-details">
                <i className="fas fa-envelope">
                  <FaEnvelope />
                </i>
                <span>officialikbunny@gmail.com</span>
              </div>
              <div className="contact-details">
                <i className="fas fa-map-marker-alt">
                  <FaMap />
                </i>
                <span>2000 Austin, TX 78727 USA</span>
              </div>
            </div>
            <div>
              <h2>Which Platform our Work</h2>
              <p>
                We love hearing from our community! Our Contact section features
                an inquiry form that allows you to reach out to us with
                questions, requests for quotes, or simply to say hello.
              </p>
              <div className="maindiv">
                <div className="one">
                  {" "}
                  <div className="social-links">
                    <i className="fab fa-youtube">
                      <FaYoutube />
                    </i>
                    <a href="#">@Yourube</a>
                  </div>
                  <div className="social-links">
                    <i className="fab fa-instagram">
                      <FaInstagram />
                    </i>
                    <a href="#">@Instagram</a>
                  </div>
                </div>
                <div className="two">
                  {" "}
                  <div className="social-links">
                    <i className="fab fa-twitter">
                      <FaTwitter />
                    </i>
                    <a href="#">@X</a>
                  </div>
                  <div className="social-links">
                    <i className="fab fa-facebook">
                      <FaFacebook />
                    </i>
                    <a href="#">@facebook</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
