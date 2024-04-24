import React from "react";
import "./ServiceCard.css";
import Reveal from "../Reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ServiceCard = () => {
  return (
    <section className="section__container service__container" id="service">
      <Reveal delay={0.5} duration={0.5}>
        <h2 className="section__header">Explore Our Offerings</h2>
        <p className="section__description">
          Experience streamlined construction with our Pre-Engineered Building
          Solutions.
        </p>
      </Reveal>
      <div className="service__grid">
        <Reveal delay={0.6} duration={0.6}>
          <div className="service__card">
            <LazyLoadImage
              src="assets/warehouse.jpeg"
              alt="service"
              className="service_card_img"
              // width="500px"
              // height="150px"
            />
            <div>
              <div>
                <h4>Warehouse</h4>
                <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                  Elevate your warehouse operations with our pre-engineered
                  building services. Offering swift construction,
                  cost-effectiveness, and adaptable designs to optimize your
                  storage and logistics.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.7} duration={0.6}>
          <div className="service__card">
            <LazyLoadImage
              src="assets/manufacturing.jpg"
              alt="service"
              className="service_card_img"
              // width="500px"
              // height="150px"
            />
            <div>
              <div>
                <h4>Manufacturing Unit</h4>
                <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                  Transform your manufacturing space with our pre-engineered
                  building solutions. Streamlined, versatile, and tailored for
                  your production needs
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.8} duration={0.6}>
          <div className="service__card">
            <LazyLoadImage
              src="assets/auditorium.jpg"
              alt="service"
              className="service_card_img"
              // width="500px"
              // height="150px"
            />
            <div>
              <div>
                <h4>Auditourim</h4>
                <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                  Experience immersive events in our state-of-the-art
                  auditourim. Versatile, tech-enabled spaces designed for
                  seamless presentations and gatherings.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.9} duration={0.6}>
          <div className="service__card">
            <LazyLoadImage
              src="assets/factory-shed.jpg"
              alt="service"
              className="service_card_img"
              // width="500px"
              // height="150px"
            />
            <div>
              <div>
                <h4>Factory Shed</h4>
                <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                  Enhance your industrial operations with our robust factory
                  shed solutions. Customizable, durable structures engineered
                  for efficiency and productivity.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} duration={0.6}>
          <div className="service__card">
            <LazyLoadImage
              src="assets/mezzanine.jpg"
              alt="service"
              className="service_card_img"
              // width="500px"
              // height="150px"
            />
            <div>
              <div>
                <h4>Mezzanine Floor</h4>
                <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                  Maximize space utilization with our innovative mezzanine floor
                  systems. Expand vertically for storage, offices, or additional
                  workspaces, tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServiceCard;
