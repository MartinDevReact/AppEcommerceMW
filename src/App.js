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

const App = () => {
  return (
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
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

