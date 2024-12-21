import React from "react";
import "./Discount.css";

const Discount = () => {
  return (
    <>
      <div class="discount">
        <div class="discount-image">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxFlEOVaZHHhri-9mMk5U9PgeNfNVkMhcxXR4iiD3Z8IjMEDe1"
            alt="Men's Collection"
          />
        </div>
        <div class="discount-content">
          <h2>ALL MEN’S COLLECTION</h2>
          <h1>50% OFF</h1>
          <a href="#" class="btn">
            DISCOVER NOW
          </a>
          <p>Limited Time Offer</p>
        </div>
      </div>
    </>
  );
};

export default Discount;
