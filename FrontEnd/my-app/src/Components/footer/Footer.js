import React from "react";
import "./Footer.css";
import fb from "../../pics/fb.png";
import insta from "../../pics/insta.png";
import linkdin from "../../pics/linkdin.png";

const Footer = () => {
  return (
    <>
      <div className="read d-flex justify-content-center align-items-center ">
        <h2>Now refer & Earn ₹500 for every referral*</h2>
        <p>*Terms and conditions will be applied</p>
      </div>

      <div className="lastpart d-flex">
        <div className="about">
          <h5>About Us</h5>
          <p>Doorstep Wash & Dryclean Service</p>
        </div>

        <div className="center-home d-flex justify-content-around">
          <div className="home">
            <strong>Home</strong>
            <p>Sign In</p>
            <p>Register</p>
          </div>
          <div className="pricing">
            <strong>Pricing</strong>
          </div>
          <div className="career">
            <strong>Career</strong>
            <p>Blogs</p>
            <p>Create</p>
          </div>
          <div className="Contact">
            <strong>Contact</strong>
          </div>
        </div>

        <div className="social">
          <h5>SOCIAL MEDIA</h5>
          <div className="icons d-flex justify-content-around">
            <img src={fb} alt="facebook" />
            <img src={insta} alt="instagram" />
            <img src={linkdin} alt="linkedin" />
          </div>
        </div>
      </div>
      <div className="copyright d-flex justify-content-center align-items-center">
        <p>2021 © Laundry</p>
      </div>
    </>
  );
};

export default Footer;
