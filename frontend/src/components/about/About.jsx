import React from "react";
import "./About.css";
import { SiTicktick } from "react-icons/si";
import Reveal from "../Reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
  return (
    <section className="section__container about__container" id="about">
      <div className="about__image">
        <Reveal delay={0.5} duration={0.5}>
          <LazyLoadImage effect="blur" src="assets/about.png" alt="about" />
        </Reveal>
      </div>
      <div className="about__content">
        <Reveal delay={0.6} duration={0.5}>
          <h2 className="section__header">
            Accelerate the growth of your aspirations effortlessly
          </h2>
          <p className="section__description">
            Step into the future of construction with pre-engineered buildings:
            Efficient, customizable, sustainable and rapid construction.
          </p>
        </Reveal>

        <Reveal delay={0.7} duration={0.5}>
          <ul>
            <li>
              <span>
                <SiTicktick width={20} color="#5484dd" />
              </span>
              <p>
                <span style={{ fontWeight: "600" }}>
                  Time-saving construction
                </span>
                : Pre-engineered buildings are assembled quickly, reducing
                project timelines significantly.
              </p>
            </li>
            <li>
              <span>
                <SiTicktick width={20} color="#5484dd" />
              </span>
              <p>
                <span style={{ fontWeight: "600" }}>Cost-effective</span>:
                Streamlined design and manufacturing processes result in lower
                overall project costs.
              </p>
            </li>
            <li>
              <span>
                <SiTicktick width={20} color="#5484dd" />
              </span>
              <p>
                <span style={{ fontWeight: "600" }}>Structural integrity</span>:
                Engineered for durability and reliability, ensuring long-term
                safety and stability.
              </p>
            </li>
            <li>
              <span>
                <SiTicktick width={20} color="#5484dd" />
              </span>
              <p>
                <span style={{ fontWeight: "600" }}>Customizable</span>:
                Tailored designs meet specific needs, offering flexibility for
                various architectural requirements.
              </p>
            </li>
            <li>
              <span>
                <SiTicktick width={20} color="#5484dd" />
              </span>
              <p>
                <span style={{ fontWeight: "600" }}>Sustainable</span>:
                Utilizing efficient materials and construction methods,
                pre-engineered buildings minimize environmental impact.
              </p>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.7} duration={0.5}>
          <div className="about__links">
            <a href="tel:+917418655555">
              <button className="btn">Call Now</button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
