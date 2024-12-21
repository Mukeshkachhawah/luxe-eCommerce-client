import React from "react";
import "./FeatureRow.css";

const FeatureBox = () => {
  return (
    <>
      <div class="features-row">
        <div class="feature-box">
          <i class="fas fa-rupee-sign"></i>
          <h3>Money-back guarantee</h3>
          <p>Shall open divide one</p>
        </div>{" "}
        <div class="feature-box">
          <i class="fas fa-truck"></i>
          <h3>Free delivery</h3>
          <p>Worldwide delivery</p>
        </div>
        <div class="feature-box">
          <i class="fas fa-headset"></i>
          <h3>Always support</h3>
          <p>24/7 support</p>
        </div>
        <div class="feature-box">
          <i class="fas fa-lock"></i>
          <h3>Secure payment</h3>
          <p>100% secure payment</p>
        </div>
      </div>
    </>
  );
};

export default FeatureBox;
