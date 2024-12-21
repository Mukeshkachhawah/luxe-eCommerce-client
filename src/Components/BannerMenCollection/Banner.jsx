import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="small-font">Men's Collection</div>
        <h1>
          <span className="green">Show</span>
          <br />
          <span className="white">Your </span>
          <span className="green">personal </span>
          <span className="white">style </span>
        </h1>
        <div className="small-font">
          <h2>Fowl saw dry which a above together place</h2>
        </div>
        <Link to="/shop">
          <button className="view-collection-btn">View Collection</button>
        </Link>
      </div>
    </>
  );
};

export default Banner;
