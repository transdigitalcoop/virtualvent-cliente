import React from "react";
import Navbar from "../ui/Navbar";
import DetalleCategorias from "../assets/components/DetalleCategorias";
import DetalleTiendas from "../assets/components/FiltroTiendas";
import DetalleProductos from "../assets/components/DetalleProductos";
import '../styles/Categorias.css'
import Footer from "../ui/Footer";

const Categorias = () => {
  return (
    <>
      <Navbar />
      <div className="container-categorias-categorias">
        <div className="categoria-container">
          <div className="filters">
            <DetalleCategorias />
            <DetalleTiendas />
          </div>
        </div>
        <DetalleProductos />
      </div>
      <Footer />
    </>
  );
};

export default Categorias;
