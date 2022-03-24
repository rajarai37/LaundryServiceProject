import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <nav>
        <Link to={"#"}>
          <strong className="laundry">LAUNDRY</strong>
        </Link>
        <Link to={"#"}>
          <span className="pricing">Pricing</span>
        </Link>
        <Link to={"#"}>
          <span className="career">Career</span>
        </Link>
        <Link to={"/"}>
          <button className="btn">User Name</button>
        </Link>
      </nav>
    </>
  );
};
export default Header;
