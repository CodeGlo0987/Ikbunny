import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <img
              alt="Cartoon cat logo"
              height="50"
              src="rabbit.webp"
              width="50"
            />
            <div>
              <h2>IKBUNNY</h2>
              <p></p>
            </div>
          </div>
          <p>
            Thank you for checking out our IkBunny! Stay tuned for more exciting
            updates, and be sure to follow us on social media for sneak peeks of
            upcoming releases!
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Contact</h3>
          <ul>
            <li>601 W Parmer Ln, Ste 370 PMB</li>
            <li> 2000 Austin, TX 78727 USA</li>
            <li>+447706413238</li>
            <li>ikbunnyofficial@gmail.com</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Other Page</h3>
          <ul>
            <Link href={"/Process"}>
              <li>Process</li>
            </Link>
            <Link href={"/AboutUs"}>
              <li>About</li>
            </Link>
            <Link href={"/ContactUs"}>
              <li>Contact Us</li>
            </Link>
            <Link href={"/Collection"}>
              <li>Collection</li>
            </Link>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Our Social Media</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Pinterest</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom-bar">COPYRIGHT 2022 © IKBUNNY</div>
    </div>
  );
};

export default Footer;
