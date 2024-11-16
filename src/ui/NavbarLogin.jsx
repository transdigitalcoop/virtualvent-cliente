import React from "react";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import "../styles/NavbarLogin.css";

const NavbarLogin = () => {
  return (
    <>
      <nav className="navbar-container-login">
        <div className="white-curve-login">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="green-curve-login"></div>
      </nav>
    </>
  );
};

export default NavbarLogin;
