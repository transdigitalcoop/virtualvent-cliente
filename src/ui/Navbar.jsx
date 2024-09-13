import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/img/logo.svg";
import Carrito from "../assets/icons/shopcar.svg";
import Usuario from "../assets/icons/user.svg";
import Buscar from "../assets/icons/search.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <div className="white-curve">
          <img src={Logo} alt="" />
        </div>
        <form action="">
          <input type="text" placeholder="Buscar" name="" id="" />
          <button type="submit">
            <img src={Buscar} alt="" />
          </button>
        </form>
        <div className="green-curve"></div>
        <ul>
          <li>
            <a href="#">Tiendas oficiales</a>
          </li>
          <li>
            <a href="#">Categorias</a>
          </li>
        </ul>
        <div className="icons">
          <img className="shop_car" src={Carrito} alt="" />
        </div>

        <div className="login">
          <img className="usuario_icon" src={Usuario} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
