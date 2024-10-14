import React from "react";
import { anime5 } from "@/public/anime6.webp";
import Image from "next/image";
import Link from "next/link";

const CartoonCartoncard = () => {
  return (
    <div className="MainCartoncard overflow-hidden	">
      {" "}
      <div className="Cartoncard-container">
        <div className="Cartoncard">
          <div>
            <img alt="Green Dragon illustration" src="anime6.webp" />
          </div>
          <div>
            {" "}
            <Link href={"anime6.webp"} target="_blank">
              <button className="cardorg">Grab It Now</button>
            </Link>
          </div>
        </div>
        <div className="Cartoncard">
          <div>
            <img alt="Green Dragon illustration" src="chinees furry.webp" />
          </div>
          <div>
            {" "}
            <Link href={"chinees furry.webp"} target="_blank">
              <button className="cardpurple">Grab It Now</button>
            </Link>
          </div>
        </div>
        <div className="Cartoncard">
          <div>
            <img alt="Green Dragon illustration" src="furry19.webp" />
          </div>
          <div>
            {" "}
            <Link href={"furry19.webp"} target="_blank">
              <button className="cardorg">Grab It Now</button>
            </Link>
          </div>
        </div>
        <div className="Cartoncard">
          <div>
            <img alt="Green Dragon illustration" src="Capture 26;.webp" />
          </div>
          <div>
            {" "}
            <Link href="furry14.webp" target="_blank">
              <button className="cardpurple">Grab It Now</button>
            </Link>
          </div>
        </div>
        <div className="Cartoncard">
          <div>
            <img alt="Green Dragon illustration" src="furry 18.webp" />
          </div>
          <div>
            {" "}
            <Link href={"furry 18.webp"} target="_blank">
              <button className="cardorg">Grab It Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartoonCartoncard;
