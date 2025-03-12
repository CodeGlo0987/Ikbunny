import React from "react";
import "./navbar.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <header className="header Bebas Orbitrons">
        <div className="logo">
          <Link href={"/"}>
            <img src="IK.png" alt="" className="w-[50px] relative left-[-100px]" />
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
              <Link href={"/Gallery"}>GALLERY</Link>
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
              <Link href={"/Faq"}>FAQ</Link>
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
              <Link href={"#"}>MORE</Link>
              <ul>
                <li>
                  <Link href={"Collection"}>FURRY ART</Link>
                </li>
                <li>
                  {/* <Link href={"Newarrival"}>NEW-ARRIVAL</Link> */}
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      {/* <img src="/headimg.png" alt="" className="w-full absolute z-50" /> */}
    </div>
  );
};

export default Navbar;
