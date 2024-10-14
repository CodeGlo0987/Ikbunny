import React from "react";
const Faq = () => {
  return (
    <div className="MainFaqs overflow-hidden	">
      <h1>FAQS</h1>
      <div className="details">
        <details className="details__container">
          <summary className="details__summary">
            <h2 className="details__title"> What is a fursuit?</h2>
          </summary>
        </details>

        <div className="details__desc">
          <div className="details__desc-inner">
            A fursuit is a costume that represents a furry character, typically
            made from soft, synthetic fur and foam. Fursuits can range from
            full-body suits to partial suits, which may include just a head,
            paws, and tail. They are worn by members of the furry community to
            express their identities and participate in events, conventions, or
            social gatherings.
          </div>
        </div>
      </div>
      <div className="details">
        <details className="details__container">
          <summary className="details__summary">
            <h2 className="details__title">How do I order a custom fursuit?</h2>
          </summary>
        </details>

        <div className="details__desc">
          <div className="details__desc-inner">
            To order a custom fursuit, you can start by filling out our
            commission inquiry form on the website. We’ll get in touch to
            discuss your design ideas, preferences, and any specific
            requirements you may have. After that, we’ll provide you with a
            quote and an estimated timeline for your fursuit. Once everything is
            agreed upon, we’ll begin the creation process!
          </div>
        </div>
      </div>
      <div className="details">
        <details className="details__container">
          <summary className="details__summary">
            <h2 className="details__title">
              What materials are used in fursuit construction?
            </h2>
          </summary>
        </details>

        <div className="details__desc">
          <div className="details__desc-inner">
            We primarily use high-quality faux fur, foam, and other synthetic
            materials to create our fursuits. These materials are chosen for
            their durability, comfort, and realistic appearance. We also
            incorporate various accessories, such as mesh for visibility in the
            eyes and breathable fabrics to enhance comfort while wearing the
            suit.
          </div>
        </div>
      </div>
      <div className="details">
        <details className="details__container">
          <summary className="details__summary">
            <h2 className="details__title">
              What is the typical turnaround time for a custom fursuit?
            </h2>
          </summary>
        </details>

        <div className="details__desc">
          <div className="details__desc-inner">
            The turnaround time for a custom fursuit varies depending on
            complexity and our current workload. Typically, it can range from a
            few weeks to several months. We will provide you with a more
            accurate estimate during the commissioning process.
          </div>
        </div>
      </div>
      <div className="details">
        <details className="details__container">
          <summary className="details__summary">
            <h2 className="details__title">
              Can I see examples of your previous work?
            </h2>
          </summary>
        </details>

        <div className="details__desc">
          <div className="details__desc-inner">
            Absolutely! We invite you to explore our Fursuit Gallery, where you
            can view a selection of our previous creations. Each entry includes
            images and descriptions to give you an idea of the variety and
            quality of our work. suit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
