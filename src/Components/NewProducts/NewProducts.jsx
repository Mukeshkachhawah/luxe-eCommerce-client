import React from "react";
import "./NewProducts.css";
import MainProduct from "./MainProduct";
import SingleProductCart from "../SingleProductCart/SingleProductCart";

const NewProducts = () => {
  const products = [
    {
      img: "https://themewagon.github.io/eiser/img/product/new-product/new-product1.png",
      name: "MEN’S SUMMER T-SHIRT",
      price: "120.70",
      original_price: "$35.00",
    },
  ];

  const products2 = [
    {
      img: "https://themewagon.github.io/eiser/img/product/new-product/new-product1.png",
      name: "MEN’S SUMMER T-SHIRT",
      price: "120.70",
      original_price: "$35.00",
    },
    {
      img: "https://themewagon.github.io/eiser/img/product/new-product/new-product1.png",
      name: "MEN’S SUMMER T-SHIRT",
      price: "120.70",
      original_price: "$35.00",W
    },
    {
      img: "https://themewagon.github.io/eiser/img/product/new-product/new-product1.png",
      name: "MEN’S SUMMER T-SHIRT",
      price: "120.70",
      original_price: "$35.00",
    },
  ];
  return (
    <>
      <div className="featured-products">
        <h2>NEW PRODUCTS</h2>
        <hr />
        <p className="subtitle">
          Bring called seed first of third give itself now ment
        </p>
        <div className="container2">
          <div className="main_product">
            {products.map((product, index) => (
              <MainProduct key={index} item={product} />
            ))}
          </div>
          <div className="side-products">
            {products2.map((item, index) => (
              <SingleProductCart key={index} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
