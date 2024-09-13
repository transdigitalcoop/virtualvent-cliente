import React from "react";
import Navbar from "../ui/Navbar.jsx";
import Producto from "../assets/img/producto.png";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <h3>Lista de productos</h3>
      <div className="product-container">
        <div className="product">
            <img src={Producto} alt="" />
            <h4>Nombre del producto</h4>
            <p>Precio del producto</p>
            <button>Comprar</button>
        </div>
        <div className="product">
            <img src={Producto} alt="" />
            <h4>Nombre del producto</h4>
            <p>Precio del producto</p>
            <button>Comprar</button>
        </div>
        <div className="product">
            <img src={Producto} alt="" />
            <h4>Nombre del producto</h4>
            <p>Precio del producto</p>
            <button>Comprar</button>
        </div>
        <div className="product">
            <img src={Producto} alt="" />
            <h4>Nombre del producto</h4>
            <p>Precio del producto</p>
            <button>Comprar</button>
        </div>
      </div>
    </>
  );
};

export default Home;
