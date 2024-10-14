import React from "react";

const Process = () => {
  return (
    <div>
      <div className="Processcontainer overflow-hidden	">
        <div className="Processcontent">
          <h2>You must know</h2>
          <h1>How do we start your project ?</h1>
          <p>
            Starting your custom fursuit project at ikbunny is easy! To begin,
            simply reach out to us through our “Contact” page. You can fill out
            the inquiry form with details about your desired fursuit, including
            character design, preferences, and any specific requests. Once we
            receive your message, we’ll get back to you promptly to discuss your
            vision in more detail.
          </p>
          <div className="Processsteps">
            <div className="Processstep">
              <i className="fas fa-comments"></i>
              <div>
                <h3>Tell us what you needed</h3>
                <p>Sed maximus eros ipsum, nec commodo urna sagittis in.</p>
              </div>
            </div>
            <div className="Processstep orange">
              <i className="fas fa-file-alt"></i>
              <div>
                <h3>Show us your reference</h3>
                <p>Sed maximus eros ipsum, nec commodo urna sagittis in.</p>
              </div>
            </div>
            <div className="Processstep orange">
              <i className="fas fa-cogs"></i>
              <div>
                <h3>Let us start your project</h3>
                <p>Sed maximus eros ipsum, nec commodo urna sagittis in.</p>
              </div>
            </div>
            <div className="Processstep">
              <i className="fas fa-check-circle"></i>
              <div>
                <h3>Show you the result</h3>
                <p>Sed maximus eros ipsum, nec commodo urna sagittis in.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Processimage-container">
          <img
            src="ikbunnyproc.webp"
            alt="Cartoon alligator with a surprised expression, standing on two legs, with a purple and orange background"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
