import React, { useContext, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Heading from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { EcomContext } from "./components/store/EcomContext";
import CartModal from "./components/modal/CartModal";
import productsArr from "./components/card/Data";

// Lazy load the components
const Card = lazy(() => import("./components/card/Card"));
const AboutUs = lazy(() => import("./components/pages/AboutUs"));
const Home = lazy(() => import("./components/pages/Home"));
const ContactUs = lazy(() => import("./components/pages/ContactUs"));
const Login = lazy(() => import("./components/pages/Login"));
const ProductDetail = lazy(() =>
  import("./components/pages/productDetail/ProductDetail")
);

function App() {
  const { userIsLoggedIn } = useContext(EcomContext);

  return (
    <Router>
      <Heading />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {!userIsLoggedIn && <Route path="/login" element={<Login />} />}
          {userIsLoggedIn && <Route path="/store" element={<Card />} />}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route
            path="/products/:productId"
            element={<ProductDetail products={productsArr} />}
          />
        </Routes>
      </Suspense>
      <Footer />
      <CartModal />
    </Router>
  );
}

export default App;
