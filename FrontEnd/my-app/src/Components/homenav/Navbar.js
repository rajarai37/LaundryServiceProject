import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="homenavbar">
        <strong>LAUNDRY</strong>
        <div className="HPC d-flex">
          <span>Home</span>
          <span>Pricing</span>
          <span>Career</span>
        </div>

        <div className="signin">
          <span>Sign In</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
