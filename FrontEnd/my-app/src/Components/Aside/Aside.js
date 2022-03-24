import React from "react";
import "./Aside.css";
import home from "../../pics/home.svg";
import bar from "../../pics/list.svg";
import more from "../../pics/more.svg";
import { Link } from "react-router-dom";
const Aside = () => {
  return (
    <>
      <div className="asidelogo">
        <Link to={"/"}>
          <img className="home" src={home} alt="home" />
        </Link>
        <div className="more">
          <img src={more} alt="more" />
        </div>
        <Link to={"/orders"}>
          <img className="bar" src={bar} alt="list" />
        </Link>
      </div>
    </>
  );
};
export default Aside;
