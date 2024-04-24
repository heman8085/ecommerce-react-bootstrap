// import React from "react";
// import "./App.css";
// import Card from "./components/card/Card";
// import Heading from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// import { EcomProvider } from "./components/store/EcomContext";
// import CartModal from "./components/modal/CartModal";

// function App() {
//   return (
//     <EcomProvider>
//       <Heading />
//       <Card />
//       <Footer />
//       <CartModal />
//     </EcomProvider>
//   );
// }

// export default App;
// App.js

// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/card/Card";
import Heading from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { EcomProvider } from "./components/store/EcomContext";
import CartModal from "./components/modal/CartModal";
import AboutUs from "./components/pages/AboutUs";

function App() {
  return (
    <Router>
      <EcomProvider>
        <Heading />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
        <CartModal />
      </EcomProvider>
    </Router>
  );
}

export default App;

