import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../homenav/Navbar";
import Footer from "../footer/Footer";
import lock from "../../pics/lock.png";
import { setToken } from "../utility/AuthOpretion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginUser = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch("http://localhost:5000/login", {
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
          string: email,
          password,
        }),
      });

      const { token } = await response.json();

      setToken(token);
      console.log(token);
      if (response.status == 200) {
        console.log("User Login Successfully");
        navigate("/addorder");
      }
    } catch (e) {
      alert("FAILED", e);
    }
  };
  return (
    <>
      <Navbar />
      <div className="main-body d-flex justify-content-center align-items-center">
        <section className="left-part d-flex justify-content-center align-items-center">
          <h1>Laundry Service</h1>
          <strong>Doorstep Wash & Dryclean Service</strong>
          <p>Don't Have An Account?</p>
          <button>
            <Link to="/register">Register</Link>
          </button>
        </section>
        <section className="center-part"></section>
        <section className="right-part">
          <h3>SIGN IN</h3>

          <input
            type="text"
            className="imp1"
            placeholder="Mobile/Email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div id="imp10"></div>
          <input
            type="password"
            className="imp2"
            placeholder="Password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <img src={lock} alt="lock" />
          <div id="imp20"></div>
          <span>
            <a href="#">Forget Password?</a>
          </span>
          <button onClick={loginUser}>Sign In</button>
          {/* <input type="submit" value="Sign In" className="button" /> */}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Login;
