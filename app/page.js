"use client";
import "animate.css/animate.compat.css";

import Footer from "./components/footere";

import Displayfinal from "./components/displayfinal";
import About2 from "./components/about2";
import MasonryGallery from "./components/mainart";
export default function Home() {
  return (
    <>
      <div className="w-full border border-red flex flex-col items-center	 justify-center	">
        <div className="Mainbody flex flex-col	 justify-center">
          {/* <Navbar /> */}
          <Displayfinal />
          <About2 />
          {/* <Display />
          <Furygang />
          <Display2 className="mt-32	"></Display2>
          <Display3 />
          <Digitalcon />
          <CartoonCartoncard />
          <HomeContct /> */}
          <MasonryGallery />
          {/* <Faq /> */}
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
