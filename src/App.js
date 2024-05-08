// import React, { useContext } from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import "./App.css";
// import Card from "./components/card/Card";
// import Heading from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// import { EcomContext} from "./components/store/EcomContext";
// import CartModal from "./components/modal/CartModal";
// import AboutUs from "./components/pages/AboutUs";
// import Home from "./components/pages/Home";
// import ContactUs from "./components/pages/ContactUs";
// import Login from "./components/pages/Login";
// import ProductDetail from "./components/pages/productDetail/ProductDetail";
// import productsArr from "./components/card/Data";


// function App() {
  
//   const { userIsLoggedIn} = useContext(EcomContext);
  
//     return (
//       <Router>
//         <Heading />
//         <Routes>
//           {!userIsLoggedIn && <Route path="/login" element={<Login />} />}
//           {userIsLoggedIn && <Route path="/store" element={<Card />} />}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route
//             path="/products/:productId"
//             element={<ProductDetail products={productsArr} />}
//           />
//         </Routes>
//         <Footer />
//         <CartModal />
//       </Router>
//     );
// }

// export default App;

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
