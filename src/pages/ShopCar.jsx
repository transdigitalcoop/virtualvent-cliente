import React from "react";
import "../styles/ShopCar.css";
import Navbar from "../ui/Navbar";
import Icono from "../assets/img/rectangle.png";
const ShopCar = () => {
  return (
    <>
      <Navbar />
      <h3 className="ShopCarTitle">Carrito</h3>
      <div className="shopcar-container">
        <div className="product-container">
          <div className="product">
            <img src={Icono} alt="" />
            <div className="product-details">
              <p>Producto 1</p>
              <p>$100.00</p>
            </div>
          </div>
          <div className="product">
            <img src={Icono} alt="" />
            <div className="product-details">
              <p>Producto 2</p>
              <p>$100.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCar;
