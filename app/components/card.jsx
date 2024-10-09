import React from "react";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";
const Card = () => {
  return (
    <>
      <ScrollAnimation
        duration={3}
        animateIn="bounceInLeft"
        className="MainBottomcard"
      >
        <h2>Article</h2>
        <h1>Read our lattest article</h1>
        <div className="Bottomitem">
          <div className="cardss">
            <img
              alt="Top view of a person working on a Furry Art project with a tablet and keyboard on a desk"
              height="200"
              src="card1.webp"
              width="400"
            />
            <div className="card-contents">
              <h2>Meet Our Team</h2>
              <p>
                At ikbunny, our team is the heart and soul of everything we do.
                We are a passionate group of artists, designers, and furries who
                share a love for creativity and community. Each member brings
                their unique skills and perspectives, ensuring that every
                fursuit and accessory.
              </p>
            </div>
            <div className="card-footers">
              <span>January 27, 2024</span>
              <span>
                <i className="fas fa-comments"></i>9 Comments
              </span>
            </div>
          </div>
          <div className="cardss">
            <img
              alt="Top view of a person working on a Furry Art project with a tablet and keyboard on a desk"
              height="200"
              src="card2.webp"
              width="400"
            />
            <div className="card-contents">
              <h2>How&apos;s Our Work</h2>
              <p>
                We believe every furry character deserves a one-of-a-kind
                design. Our talented team collaborates closely with clients to
                bring their visions to life, resulting in custom fursuits that
                are as unique as the individuals who wear them. From vibrant
                colors to intricate details
              </p>
            </div>
            <div className="card-footers">
              <span>January 27, 2024</span>
              <span>
                <i className="fas fa-comments"></i>6 Comments
              </span>
            </div>
          </div>
          <div className="cardss">
            <img
              alt="Top view of a person working on a Furry Art project with a tablet and keyboard on a desk"
              height="200"
              src="card3.webp"
              width="400"
            />
            <div className="card-contents">
              <h2>Our Best Designer</h2>
              <p>
                Our designer has a strong background in art and illustration,
                specializing in character creation. With a keen eye for detail
                and a flair for creativity, they are dedicated to crafting
                designs that capture the essence of each character, ensuring
                that every fursuit is a true reflection of its wearer.
              </p>
            </div>
            <div className="card-footers">
              <span>January 27, 2024</span>
              <span>
                <i className="fas fa-comments"></i>8 Comments
              </span>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default Card;
