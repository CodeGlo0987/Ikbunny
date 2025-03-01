"use client";
import Image from "next/image";
import "animate.css/animate.compat.css";
import { useEffect } from "react";
import AOS from "aos";
import ScrollAnimation from "react-animate-on-scroll";
import Navbar from "./components/navbar";
import Display from "./components/display";
import Display2 from "./components/display2";

import Display3 from "./components/display3";
import Card from "./components/card";
import Footer from "./components/footere";
import Furygang from "./components/furygang";
import Digitalcon from "./components/Digitalcon";
import CartoonCartoncard from "./components/CartoonCard";
import HomeContct from "./components/Homeconatct";
import Faq from "./components/faq";
import Displayfinal from "./components/displayfinal";
import About2 from "./components/about2";
import FurryGallery from "./components/portfolio";
export default function Home() {
  return (
    <>
      <div className="w-full border border-red flex flex-col items-center	 justify-center	">
        <div className="Mainbody flex flex-col	 justify-center">
          <Navbar />
          <Displayfinal />
          <About2 />
          {/* <Display />
          <Furygang />
          <Display2 className="mt-32	"></Display2>
          <Display3 />
          <Digitalcon />
          <CartoonCartoncard />
          <HomeContct /> */}
          <FurryGallery />
          <Faq />
          {/* <Card /> */}
        </div>
        <div className="w-full">
          {" "}
          <Footer />
        </div>
      </div>
    </>
  );
}
