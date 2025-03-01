"use client";

import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
function HomeContct() {
  let [countcode, setcoutcode] = useState("+1 (555) 000-000");
  const Countryhandler = (e) => {
    if (e.target.value === "UK") {
      setcoutcode("+44 (555) 000-000");
    } else if (e.target.value === "CA") {
      setcoutcode("+1 (555) 000-000");
    } else {
      setcoutcode("+1 (555) 000-000");
    }
  };
  const Formhandle = async (e) => {
    const notify = () => toast.success("Successfully Submited!");
    const notify2 = () => toast.error("There are some Error!");
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", "79d21469-1f13-416c-b6b0-32734ea11e77");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      notify();
      e.target.reset();
    } else {
      console.log("Error", data);
      notify2();
    }
  };

  return (
    <>
      <Toaster />
      <div className="cont overflow-hidden	bg-[#5ce1e6]">
        <div className="container-contact">
          <div className="form-container-contact">
            <h2 className="pp">Start your project now</h2>
            <h1>Wanted to create your own Furry art ?</h1>
            <p>
              Absolutely! At ikbunny, we’re excited to help you dive into the
              vibrant world of furry art. Whether you’re a seasoned artist or
              just starting out, there are plenty of ways to express your
              creativity.
            </p>
            <form onSubmit={(e) => Formhandle(e)}>
              <input
                className="inputcont"
                name="Name"
                placeholder="Your Name"
                type="text"
              />
              <input
                className="inputcont"
                name="Email"
                placeholder="Your Email"
                type="email"
              />
              <div className="phonenummain">
                <select
                  name="country"
                  onChange={(e) => Countryhandler(e)}
                  className=" numcountry"
                >
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="CA">CA</option>
                </select>
                <input
                  type="number"
                  placeholder={countcode}
                  className=" contactnum "
                  name="Number"
                />
              </div>
              <textarea
                name="Discription"
                className="inputcont"
                placeholder="Tell us what you needed"
              ></textarea>
              <button type="submit">Send</button>
            </form>
            <p className="note-contact">
              We will contact you back within 24hrs via email.
            </p>
          </div>
          <div className="image-container-contact">
            <img
              alt="Cartoon character with a backpack, smiling and giving a thumbs up"
              height="300"
              src="ikbunnyform.webp"
              width="300"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeContct;
