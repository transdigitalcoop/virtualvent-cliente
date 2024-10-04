import React from "react";
import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-info">
            <ul>
              <li>
                <a href="">Acerca de nosotros</a>
              </li>
              <li>
                <a href="">Políticas y privacidad</a>
              </li>
              <li>
                <a href="">Contáctanos</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <ul>
              <li>
                <a href="">
                  <CiFacebook />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <FaSquareXTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-logo-container">
            <div className="footer-white-curve">
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className="footer-green-curve"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
