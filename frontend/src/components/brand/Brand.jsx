import React from "react";
import "./Brand.css";
import Reveal from "../Reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Brand = () => {
  const brands = [
    "casa_grande.png",
    "chennaisilks.png",
    "gururaghavendra.png",
    "jrt.png",
    "kasi.png",
    "lalithaaj.png",
    "simpark.png",
    "skmt.png",
    "thangam.png",
    "TRIL.png",
  ];

  return (
    <section className="section__container service__container" id="service">
      <Reveal delay={0.5} duration={0.5}>
        <h2 className="section__header">Our Clients</h2>
        <p className="section__description">
          Empowering Our Clients with Tailored Solutions for their Success in
          Every Venture.
        </p>
      </Reveal>

      {/* <div className="grid-wrapper">
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
      </div> */}
      <div className="logos">
        <div className="logo-slides">
          {brands.map((item, index) => (
            <LazyLoadImage
              src={`assets/clients/${item}`}
              key={index}
              alt="Brand Logo"
              className="scrolling-text"
            />
          ))}
        </div>
        <div className="logo-slides">
          {brands.map((item, index) => (
            <LazyLoadImage
              src={`assets/clients/${item}`}
              key={index}
              alt="Brand Logo"
              className="scrolling-text"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
