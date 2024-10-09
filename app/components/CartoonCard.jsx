import React from "react";
import { anime5 } from "@/public/anime6.png";
import Image from "next/image";
import Link from "next/link";

const CartoonCartoncard = () => {
  return (
    <div className="MainCartoncard">
      {" "}
      <div className="Cartoncard-container">
        <div className="Cartoncard">
          <div>
            <img alt="Green Dragon illustration" src="anime6.png" />
          </div>
          <div>
            {" "}
            <Link href={"anime6.png"} target="_blank">
              <button className="cardorg">Grab It Now</button>
            </Link>
          </div>
        </div>
        <div className="Cartoncard">
          <div>
            <img alt="Green Dragon illustration" src="chinees furry.png" />
          </div>
          <div>
            {" "}
            <Link href={"chinees furry.png"} target="_blank">
              <button className="cardpurple">Grab It Now</button>
            </Link>
          </div>
        </div>
        <div className="Cartoncard">
          <div>
            <img alt="Green Dragon illustration" src="furry19.png" />
          </div>
          <div>
            {" "}
            <Link href={"furry19.png"} target="_blank">
              <button className="cardorg">Grab It Now</button>
            </Link>
          </div>
        </div>
        <div className="Cartoncard">
          <div>
            <img alt="Green Dragon illustration" src="furry14.png" />
          </div>
          <div>
            {" "}
            <Link href="furry14.png" target="_blank">
              <button className="cardpurple">Grab It Now</button>
            </Link>
          </div>
        </div>
        <div className="Cartoncard">
          <div>
            <img alt="Green Dragon illustration" src="furry 18.png" />
          </div>
          <div>
            {" "}
            <Link href={"furry 18.png"} target="_blank">
              <button className="cardorg">Grab It Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartoonCartoncard;
