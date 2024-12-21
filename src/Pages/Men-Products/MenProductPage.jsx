import Footer from "../../Components/Footer/Footer";
import HeaderMain from "../../Components/HeaderMain/HeaderMain";
import MenProducts from "../../Components/MenProducts/MenProducts";
import Section from "../../Components/Section/Section";

const MenProductPage = () => {
  return (
    <>
      <HeaderMain />
      <Section
        title={"Men's Fashion Collection"}
        pagePath={"Home / Shop / Men Fashion"}
      />
      <MenProducts />
      <Footer />
    </>
  );
};

export default MenProductPage;
