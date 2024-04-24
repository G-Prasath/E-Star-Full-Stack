import React from "react";
import Slider from "react-slick";
import "./Team.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reveal from "../Reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Team = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="client" id="team">
        <div className="section__container client__container">
          <Reveal duration={0.5} delay={0.6}>
            <h2 className="section__header">Our Teams</h2>
            <p className="section__description">
              Discover the stories of wanderlust and cherished memories through
              the eyes of our valued clients.
            </p>
          </Reveal>
        </div>
      </section>
      <div
        className="slider-containe"
        style={{ marginTop: "-100px", marginBottom: "100px" }}
      >
        <Slider {...settings} className="slider">
          <Reveal duration={0.25} delay={0.5}>
            {/* -------- card one ---------- */}
            <div className="team-cart">
              <div className="img-box">
                <LazyLoadImage src="/assets/jayaraman.jpg" alt="" />
              </div>
              <div
                style={{
                  boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)",
                  borderRadius: "5px",
                }}
              >
                <div className="name-box">
                  <h6>Mr. K. Jayaraman</h6>
                  <p>Managing Director</p>
                </div>
                <div className="disc-box">
                  <p>
                    Founder & CEO.
                    <br /> A Mechanical engineer with 20+ years of profound
                    experience in Engineering Design & HR
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal duration={0.35} delay={0.7}>
            {/* ---------- Card Two -------  */}
            <div className="team-cart">
              <div className="img-box">
                <LazyLoadImage src="/assets/muniyandi.jpg" alt="" />
              </div>
              <div
                style={{
                  boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)",
                  borderRadius: "5px",
                }}
              >
                <div className="name-box">
                  <h6>Mr. M. Muniyandi</h6>
                  <p>Principal Consultant - Civil & Structural</p>
                </div>
                <div className="disc-box">
                  <p>
                    An aspirant Engineer with more than 35+ years experience in
                    Civil & Structural Engineeirng.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal duration={0.45} delay={0.9}>
            {/* ---------- Card Three -------  */}
            <div className="team-cart">
              <div className="img-box">
                <LazyLoadImage src="/assets/ramasamy.png" alt="" />
              </div>
              <div
                style={{
                  boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)",
                  borderRadius: "5px",
                }}
              >
                <div className="name-box">
                  <h6>Mr. M.Ramasamy</h6>
                  <p>Principal Consultant - Design & SPM</p>
                </div>
                <div className="disc-box">
                  <p>
                    An aspirant Engineer with more than 35+ years experience in
                    Plant Engineering Automation.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ---------- Card Four -------  */}
          <div className="team-cart">
            <div className="img-box">
              <LazyLoadImage src="/assets/sundharam.jpg" alt="" />
            </div>
            <div
              style={{
                boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)",
                borderRadius: "5px",
              }}
            >
              <div className="name-box">
                <h6>Mr. M.Sundarm</h6>
                <p>Principal Consultant - Projects</p>
              </div>
              <div className="disc-box">
                <p>
                  A Mechanical Engineer with more than 16+ years of expertise in
                  Engineering Project & Product Management.
                </p>
              </div>
            </div>
          </div>

          {/* ---------- Card Five -------  */}
          <div className="team-cart">
            <div className="img-box">
              <LazyLoadImage src="/assets/raman.jpg" alt="" />
            </div>
            <div
              style={{
                boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)",
                borderRadius: "5px",
              }}
            >
              <div className="name-box">
                <h6>Mr. S. Raman</h6>
                <p>Sr. Piping Consultant</p>
              </div>
              <div className="disc-box">
                <p>
                  A mechanical engineer having more than 35+ Years of Experience
                  in Design of piping systems - Power & Process.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Team;
