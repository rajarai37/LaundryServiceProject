import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../homenav/Navbar";
import Footer from "../footer/Footer";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
    password: "",
  });

  let name,value;
  const handleInput =(e)=>{
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});

  }

  const navigate = useNavigate();
  const register = async (e) => {
    console.log(e.target);
    try {
      e.preventDefault();
      const {name,
      email,
      mobile,
      state,
      district,
      address,
      pincode,
      password} = user;
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
      name,
      email,
      mobile,
      state,
      district,
      address,
      pincode,
      password
        }),
      });
      if (response.status == 200) {
        console.log("User Added Successfully");
      }
    } catch (e) {
      alert("failed", e);
    }
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <section className="main-body d-flex justify-content-center align-items-center">
        <section className="left-body">
          <p>Laundry Service</p>
          <strong>Doorstep Wash & Dryclean Service</strong>
          <span>Already Have Account</span>
          <button>
            <Link to="/">Sign In</Link>{" "}
          </button>
        </section>

        <section className="center"></section>

        <section className="right-body">
          <form onSubmit={register}>
            <h3>REGISTER</h3>
            <input
              className="imp1"
              type="text"
              placeholder="Name"
              name="name"
              value={user.name}
              onChange={handleInput}
              required
            />
            <div className="imp10 line1 "></div>
            <input
              className="imp2"
              type="text"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInput}
              required
            />
            <div className="imp20 line1 "></div>
            <input
              className="imp3"
              type="Number"
              placeholder="mobile"
              name="mobile"
              value={user.mobile}
              onChange={handleInput}
              required
            />
            <div className="imp10 line2 "></div>
            <input
              className="imp4"
              type="text"
              placeholder="State"
              name="state"
              value={user.state}
              onChange={handleInput}
              required
            />
            <div className="imp20 line2 "></div>
            <input
              className="imp5"
              type="text"
              placeholder="District"
              name="district"
              value={user.district}
              onChange={handleInput}
              required
            />
            <div className="imp10 line3 "></div>
            <input
              className="imp6"
              type="text"
              placeholder="Address"
              name="address"
              value={user.address}
              onChange={handleInput}
              required
            />
            <div className="imp20 line3 "></div>
            <input
              className="imp7"
              type="Number"
              placeholder="Pincode"
              name="pincode"
              value={user.pincode}
              onChange={handleInput}
              required
            />
            <div className="imp10 line4 "></div>
            <input
              className="imp8"
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInput}
              required
            />
            <div className="imp20 line4 "></div>

            <input className="checkbox" type="checkbox" />
            <a className="terms" href="#">
              I agree to Terms & Condition receiving marketing and promotional
              materials
            </a>
            {/* <button>
              <Link to="/">Register</Link>
            </button> */}
            {/* <Link to='/'> */}
            <input type="submit" value="Register" className="button" />
            {/* </Link> */}
          </form>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Register;
