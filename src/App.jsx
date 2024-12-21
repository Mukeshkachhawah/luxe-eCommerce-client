import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ShopCategory from "./Pages/Women/WomenProductPage";
import ProductCheckOut from "./Pages/Women/ProductCheckOut";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import Love from "./Pages/LoveProducts/Love";
import ContactDetail from "./Pages/ContactDetails/ContactDetail";
import FaqPage from "./Pages/FAQ-Page/FaqPage";
import CartPage from "./Pages/Cart-Page/CartPage";
import MenProductPage from "./Pages/Men-Products/MenProductPage";
import BeautyPage from "./Pages/Beauty-Product-Page/BeautyPage";
import ProductDetail from "./Components/ProductDetails/ProductDetails";
import WomenProductPage from "./Pages/Women/WomenProductPage";
import UserProfilePage from "./Pages/UserProfilePage";
import SignInPage from "./forms/Sign-In/SignInForm";
import SignUp from "./forms/Sign-Up/SignUp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men-products" element={<MenProductPage />} />
        <Route path="/women-products" element={<WomenProductPage />} />
        <Route path="/beauty-products" element={<BeautyPage />} />
        <Route path="/productcheckout" element={<ProductCheckOut />} />
        <Route path="/shopcategory" element={<ShopCategory />} />
        <Route path="/productdetail/_id" element={<ProductDetail />} />
        <Route path="/order-tracking" element={<TrackOrder />} />
        <Route path="/contact-page" element={<ContactDetail />} />
        <Route path="/love-product" element={<Love />} />
        <Route path="/faq-page" element={<FaqPage />} />
        <Route path="/cart-page" element={<CartPage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
