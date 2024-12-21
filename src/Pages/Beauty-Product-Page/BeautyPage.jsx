import HeaderMain from "./../../Components/HeaderMain/HeaderMain";
import Footer from "./../../Components/Footer/Footer";
import Beauty from "../../Components/BeautyProducts/BeautyProducts";
import Section from "./../../Components/Section/Section";

const BeautyPage = () => {
  return (
    <>
      <HeaderMain />
      <Section
        title={"Beauty's  Collection"}
        pagePath={"Home / Shop / Beauty Fashion"}
      />
      <Beauty />
      <Footer />
    </>
  );
};

export default BeautyPage;
