"use client";
import "animate.css/animate.compat.css";

import Footer from "./components/footere";
import Navbar from './components/navbar';
import Displayfinal from "./components/displayfinal";
import About2 from "./components/about2";
import FurryGallery from "./components/portfolio";
export default function Home() {
  return (
    <>
    
    <Navbar />
      <div className="w-full border border-red flex flex-col items-center	 justify-center	">
        <div className="Mainbody flex flex-col	 justify-center">

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
