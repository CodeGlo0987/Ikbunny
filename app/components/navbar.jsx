import React from "react";
import "./navbar.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <Link href={"/"}>
            <img src="logo.webp" alt="" />
          </Link>
        </div>
        <input type="checkbox" id="toggle" />
        <label htmlFor="toggle">
          {" "}
          <img
            className="menu"
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQcRCwNIHXgysCmSjnyxc4peA8hq0NI7gcQvhjIOY9WLa8wr-lshwxZcgveagSi4UoUBJ8muOPfLmpugzjVro7-5Lrpynl-Ngr_cMsKAzPU9CMwjqQLK7ee_6hf0v2FN_tPDTYAeIKYZLQpvARWwM9D-iHbyJ8OwC1Xd-u-nbDw6HiTzUScSxaVd9yEhD3/s2500/menu1.webp"
            alt="menu"
          />
        </label>

        <nav className="navigation">
          <ul>
            <li>
              <Link href={"/"}>HOME</Link>
            </li>
            <li>
              <Link href={"Process"}>PROCESS</Link>
              {/* <ul>
                <li>
                  <Link href="1">BUY</Link>
                </li>
                <li>
                  <Link href="1">Laptops</Link>
                </li>
                <li>
                  <a href="1">Accesorios</a>
                </li>
              </ul> */}
            </li>
            <li>
              <Link href={"/AboutUs"}>ABOUT</Link>
              {/* <ul>
                <li>
                  <a href="1">FAQ</a>
                </li>
                <li>
                  <a href="1">TERM AND SERVICES</a>
                </li>
              </ul> */}
            </li>

            <li>
              <Link href={"ContactUs"}>CONTACT</Link>
            </li>

            <li>
              <Link href={"#"}>COLLECTION</Link>
              <ul>
                <li>
                  <Link href={"Collection"}>ALL COLLECTION</Link>
                </li>
                <li>
                  <Link href={"Newarrival"}>NEW-ARRIVAL</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
