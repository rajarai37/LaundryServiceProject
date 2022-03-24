import React from "react";
import "./Addorder.css";

import search from "../../pics/search.svg";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Footer from "../Footer1/Footer";
import { Link } from "react-router-dom";

function Addorder() {
  return (
    <div>
      <Header />
      <Aside />

      <div className="orandin">
        <div className="or">
          <b>Orders | 0</b>
        </div>
        <div className="in">
          <img src={search} alt="search"></img>
          <input placeholder="search" type="text"></input>
          <div className="bottomline"></div>
        </div>
        <div className="createbtn">
          <p className="text">No Order avaiable</p>
          <Link to="/createorder">
            <button className="cbtn">Create</button>
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Addorder;
