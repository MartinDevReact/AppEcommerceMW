import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Nav from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ArtDetail from "./pages/ArtDetail/ArtDetail";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CartPage from "./pages/CartPage/CartPage";
import ArtCategory from  "./pages/ArtCategory/ArtCategory";
import CartConfirm from  "./pages/CartConfirm/CartConfirm";

import { CartProvider } from './components/Contexts/CartContext';


const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ArtDetail/:id" element={<ArtDetail />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/ArtCategory/:category" element={<ArtCategory />} />
            <Route path="/CartConfirm" element={<CartConfirm />} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;

