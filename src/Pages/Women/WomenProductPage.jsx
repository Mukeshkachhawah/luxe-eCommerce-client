import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import Section from "../../Components/Section/Section";
import Footer from "../../Components/Footer/Footer";
import WomenProduct from "../../Components/Women-Product/WomenProduct";
import { useState } from "react";

const WomenProductPage = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <HeaderMain setSearch={setSearch} />
      <Section
        title={"Women’s Fashion Collection"}
        pagePath={"Home / Shop / Women Fashion"}
      />
      <WomenProduct search={search} />
      <Footer />
    </>
  );
};

export default WomenProductPage;
