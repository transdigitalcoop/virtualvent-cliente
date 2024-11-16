import React from "react";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import "../styles/NavbarAdm.css";
import Usuario from "../../assets/icons/user.svg";

const NavbarAdm = () => {
  return (
    <>
      <nav className="adm-nav-container">
        <div className="adm-nav-container-white-curve">
          <Link to="/admin/home">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="adm-nav-container-icon">
          <Link to="">
            <img src={Usuario} alt="" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarAdm;
