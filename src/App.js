import React from 'react';
import './App.css';
import Card from './components/card/Card';
import Heading from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import { EcomProvider } from './components/store/EcomContext';
import CartModal from './components/modal/CartModal';

function App() {


  return (
    <EcomProvider>
      <Heading />
      <Card />
      <Footer />
      <CartModal/>
    </EcomProvider>
  );
}

export default App;
