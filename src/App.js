import React, { Component } from "react";
import "./App.css";

// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer datail="Detalle de los articulos a vender!"  />
        <div >
          <div >
            <h1>articulos</h1>
            <h1>articulos</h1>
            <h1>articulos</h1>
            <h1>articulos</h1>
            <h1>articulos</h1>
            <h1>articulos</h1>
            <h1>articulos</h1>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

