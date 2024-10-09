"use client";
import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";
import CartoonCartoncard from "../components/CartoonCard";
import "animate.css/animate.compat.css";
import Display3 from "../components/display3";
import HomeContct from "../components/Homeconatct";
import Footer from "../components/footere";
const Page = () => {
  return (
    <div className="w-full flex flex-col items-center	 justify-center	">
      <Navbar />
      <div className="custom-header my-48">
        <div className="custom-header-content">
          <h1>Our Collection</h1>
          <div className="custom-breadcrumb">
            <Link href={"/"}>Home</Link> Collection
          </div>
        </div>
      </div>
      <div className="Mainbody">
        <CartoonCartoncard />
        <Display3 />
        <HomeContct />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
