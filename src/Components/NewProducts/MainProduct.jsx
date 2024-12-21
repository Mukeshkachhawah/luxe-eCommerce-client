import React from "react";
import "./MainProduct.css";
const MainProduct = ({ item }) => {
  return (
    <>
      <div className="main-product">
        <div className="product">
          <img src={item.img} alt={item.name} />
          <div className="pricing">
            <h3>COLLECTION OF 2019</h3>
            <h4>{item.name}</h4>
            <p className="price">${item.price}</p>
            <button className="add-to-cart">ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProduct;
