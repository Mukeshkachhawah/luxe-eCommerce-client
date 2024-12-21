import React from "react";
import Header from "../../Components/Header/Header";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import Footer from "../../Components/Footer/Footer";
import CheckOut from "./../../Components/CheckOut/CheckOut";
import Section from "../../Components/Section/Section";

const ProductCheckOut = () => {
  return (
    <>
      <Header />
      <HeaderMain />
      <Section
        title={"Product Check-out"}
        pagePath={"Home / Shop / Product Check-Out"}
      />
      <CheckOut />
      <Footer />
    </>
  );
};

export default ProductCheckOut;
