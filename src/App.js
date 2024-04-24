import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/card/Card";
import Heading from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { EcomProvider } from "./components/store/EcomContext";
import CartModal from "./components/modal/CartModal";
import AboutUs from "./components/pages/AboutUs";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <EcomProvider>
        <Heading />
        <Routes>
          <Route path="/store" element={<Card />} />
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
        <CartModal />
      </EcomProvider>
    </Router>
  );
}

export default App;

