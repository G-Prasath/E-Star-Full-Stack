import React from "react";
import "./Projects.css";
import Reveal from "../Reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Projects = () => {
  return (
    <section className="section__container service__container" id="projects">
      <Reveal delay={0.5} duration={0.5}>
        <h2 className="section__header">Explore Our Portfolio</h2>
        <p className="section__description">
          Explore our diverse portfolio, showcasing our expertise and excellence
          across various projects
        </p>
      </Reveal>

      <div className="grid-wrapper">
        <div className="wide">
          <LazyLoadImage
            className="service_img"
            effect="blur"
            src="/assets/service/service-1.jpg"
          />
        </div>
        <div>
          <LazyLoadImage
            className="service_img"
            effect="blur"
            src="/assets/service/service-2.jpg"
          />
        </div>
        <div>
          <LazyLoadImage
            className="service_img"
            effect="blur"
            src="/assets/service/service-3.jpg"
          />
        </div>

        <div>
          <LazyLoadImage
            className="service_img"
            effect="blur"
            src="/assets/service/service-5.jpg"
          />
        </div>

        <div>
          <LazyLoadImage
            className="service_img"
            effect="blur"
            src="/assets/service/service-6.jpg"
          />
        </div>
        <div className="wide">
          <LazyLoadImage
            className="service_img"
            effect="blur"
            src="/assets/service/service-4.jpg"
          />
        </div>
        <div className="wide">
          <LazyLoadImage
            className="service_img"
            effect="blur"
            src="/assets/service/service-9.jpg"
          />
        </div>
        <div>
          <LazyLoadImage
            className="service_img"
            effect="blur"
            src="/assets/service/service-7.jpg"
          />
        </div>

        <div>
          <LazyLoadImage
            className="service_img"
            effect="blur"
            src="/assets/service/service-8.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
