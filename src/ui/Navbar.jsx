import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/img/logo.svg";
import Carrito from "../assets/icons/shopcar.svg";
import Usuario from "../assets/icons/user.svg";
import Buscar from "../assets/icons/search.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <div className="white-curve">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
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
            <Link to="/tiendas">Tiendas oficiales</Link>
          </li>
          <li>
            <Link to="/categorias">Categorias</Link>
          </li>
        </ul>
        <div className="icons">
          <Link to="">
            <img className="shop_car" src={Carrito} alt="" />
          </Link>
        </div>

        <div className="login">
          <img className="usuario_icon" src={Usuario} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
