import React, { useEffect, useState } from "react";
import "./InspiredProduct.css";
import SingleProductCart from "../SingleProductCart/SingleProductCart";
const InspiredProduct = () => {
  //This defines a functional component called ProductCategory.

  const [products, setProducts] = useState([]);
  // State to store the products  This creates a state variable products (initially an empty array) and a function setProducts to update it.

  const [error, setError] = useState(null);
  const url = "http://localhost:8000/products/random_8";

  useEffect(() => {
    //This hook runs the code inside it after the component mounts and whenever the url changes.
    const fetchData = async (url) => {
      //This defines an asynchronous function to fetch data from the API.
      try {
        const response = await fetch(url); // This makes a request to the API and waits for the response.

        if (!response.ok) {
          //This checks if the response is not OK (status code is not 2xx). If so, it throws an error.
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // This converts the response to JSON format.

        setProducts(data); //This updates the products state with the fetched data.
      } catch (error) {
        //If there's an error during the fetch, this catches it and updates the error state with the error message.
        setError(error.message);
      }
    };
    fetchData(url);
  }, [url]);

  return (
    <>
      <div className="inspired-products">
        <div className="container">
          <br />
          <div className="inspired-products-grid">
            {error && <div className="error">{error}</div>}
            {products.map((item, index) => (
              <SingleProductCart key={index} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InspiredProduct;
