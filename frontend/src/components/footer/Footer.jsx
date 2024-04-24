import React from "react";
import "./Footer.css";

import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { ImPinterest2 } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo">
            <a href="#">
              <img src="assets/logo.png" alt="logo" />
            </a>
          </div>
          <p className="footer_para">
            From concept to completion, we're your pre-engineered solutions
            partner. Our expertise ensures efficiency, quality, and timely
            project delivery.
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <ImPinterest2 color="#112b5a" fontSize={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaXTwitter color="#112b5a" fontSize={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <CiInstagram color="#112b5a" fontSize={25} />
              </a>
            </li>
            <li>
              <a href="#">
                <CiLinkedin color="#112b5a" fontSize={25} />
              </a>
            </li>
            <li>
              <a href="#">
                <CiFacebook color="#112b5a" fontSize={25} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__links">
            <li>
              <a href="tel:+91 9566000981">
                <span>
                  <i className="ri-phone-fill"></i>
                </span>{" "}
                +91 9566000981
              </a>
            </li>
            <li>
              <a href="mailto:info@estar.in">
                <span>
                  <i className="ri-record-mail-line"></i>
                </span>{" "}
                info@estar.in
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i className="ri-map-pin-2-fill"></i>
                </span>{" "}
                26/2, Taylor's Estate II Street, Kodambakkam, Chennai-600024,
                Tamilnadu, India
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="footer__col">
          <h4>Subscribe</h4>
          <form action="/">
            <input type="text" placeholder="Enter your email" />
            <button className="btn">Subscribe</button>
          </form>
        </div> */}
      </div>
      <div className="footer__bar">
        Copyright © 2024 E Start. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
