import React, { useState } from "react";
import "./Form.css";
import Reveal from "../Reveal";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = {};
    if (!formData.username.trim()) {
      validationError.username = "Username is Required";
    }

    if (!formData.email.trim()) {
      validationError.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationError.email = "Email is Invalide";
    }

    if (!formData.phone.trim()) {
      validationError.phone = "Phone Number Required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationError.phone = "Phone Number is Invalide";
    }
    if (!formData.service) {
      validationError.service = "Please choose a service";
    }

    setErrors(validationError);

    if (Object.keys(validationError).length === 0) {
      formData.email = "";
      formData.username = "";
      formData.phone = "";
      formData.service = "";
    }
  };

  return (
    <div className="footer_form">
      <Reveal delay={0.5} duration={0.5}>
        <h2 className="section__header">Let's Get in Touch</h2>
        <p className="section__description">
          Let's Connect and Explore How We Can Elevate Your Business Together.
        </p>
      </Reveal>
      <div className="form_inputs">
        <div className="input_form_img">
          <img src="/assets/contact.png" alt="" />
        </div>
        <div className="form_inputs_feilds">
          <form onSubmit={handleSubmit}>
            <div className="input-feilds">
              <input
                type="text"
                name="username"
                id="name"
                value={formData.username}
                placeholder="Enter Your Name *"
                autoComplete="off"
                onChange={handleChange}
                style={{ border: errors.username ? "1px solid red" : "" }}
              />
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.username && errors.username}
              </p>
            </div>
            <div className="input-feilds">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Enater Your Email *"
                autoComplete="off"
                onChange={handleChange}
                style={{ border: errors.email ? "1px solid red" : "" }}
              />
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.email && errors.email}
              </p>
            </div>
            <div className="input-feilds">
              <input
                type="text"
                name="phone"
                id="name"
                placeholder="Enter Your Phone No * "
                autoComplete="off"
                onChange={handleChange}
                value={formData.phone}
                style={{ border: errors.phone ? "1px solid red" : "" }}
              />
              <p style={{ color: "red", fontSize: "13px" }}>
                {errors.phone && errors.phone}
              </p>
            </div>
            <div className="input-feilds">
              <div
                className="custom-select"
                style={{ border: errors.service ? "1px solid red" : "" }}
              >
                <select
                  name="service"
                  onChange={handleChange}
                  value={formData.service}
                >
                  <option>Choose Services</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="manufacturing unit">Manufacturing Unit</option>
                  <option value="auditourim">Auditourim</option>
                  <option value="factory shed">Factory Shed</option>
                  <option value="mezzanine floor">Mezzanine Floor</option>
                </select>
              </div>
            </div>
            <div className="input-feilds">
              <button className="btn">Touch Here</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
