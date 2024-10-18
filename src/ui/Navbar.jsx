import { React, useState } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/img/logo.svg";
import Carrito from "../assets/icons/shopcar.svg";
import Campana from "../assets/icons/notification.svg";
import Usuario from "../assets/icons/user.svg";
import Buscar from "../assets/icons/search.svg";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="white-curve">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="form">
          <form action="">
            <input type="text" placeholder="Buscar" name="" id="" />
            <button type="submit">
              <img src={Buscar} alt="" />
            </button>
          </form>
        </div>
        <div className="green-curve"></div>
        <ul>
          <li className="menu-icon" onClick={toggleMenu}>
            <IoMenu />
          </li>
          <div className={`menu ${menuOpen ? "open" : ""}`}>
            <li>
              <Link to="/tiendas">Tiendas oficiales</Link>
            </li>
            <li>
              <Link to="/categorias">Categorias</Link>
            </li>
          </div>
        </ul>
        <div className="icons">
          <Link to="">
            <img className="notification" src={Campana} alt="" />
          </Link>
          <Link to="/carrito">
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
