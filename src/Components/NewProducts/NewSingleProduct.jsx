import React from "react";
import "./NewSingleProduct.css";
const NewSingleProduct = ({ item }) => {
  return (
    <>
      <div class="side-products">
        <div class="product">
          <img src="shoes.jpg" alt="Latest Men's Sneaker" />
          <div class="pricing">
            <h3>NIKE LATEST SNEAKER</h3>
            <p class="price">
              $25.00 <span class="original-price">$35.00</span>
            </p>
          </div>
          <div class="icons">
            <i class="fas fa-cart-plus"></i>
            <i class="fas fa-eye"></i>
            <i class="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewSingleProduct;
