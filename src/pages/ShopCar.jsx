import React from "react";
import "../styles/ShopCar.css";
import Navbar from "../ui/Navbar";
import Icono from "../assets/img/rectangle.png";
import Footer from "../ui/Footer";
const ShopCar = () => {
  return (
    <>
      <Navbar />
      <div className="car-container">
        <h3 className="ShopCarTitle">Carrito</h3>
        <div className="product-container">
          <div className="product">
            <img src={Icono} alt="" />
            <div className="product-details">
              <p>Producto 1</p>
              <p>$100.00</p>
            </div>
            <div className="product-options">
              <input type="number" placeholder="1" />
              <button>Eliminar</button>
            </div>
            <div className="product-shop-details">
              <p>Transdigitalcoop</p>
            </div>
          </div>
          <div className="product">
            <img src={Icono} alt="" />
            <div className="product-details">
              <p>Producto 2</p>
              <p>$100.00</p>
            </div>
            <div className="product-options">
              <input type="number" placeholder="1" />
              <button>Eliminar</button>
            </div>
            <div className="product-shop-details">
              <p>Transdigitalcoop</p>
            </div>
          </div>
        </div>
        <div className="resume-buy">
          <div className="resume-title">
            <h3>Resumen de compra</h3>
          </div>
          <div className="resume-info">
            <p>Productos</p>
            <p>Total</p>
            <button>Comprar todo</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopCar;
