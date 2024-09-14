import React, { useEffect, useState } from "react";
import Navbar from "../ui/Navbar.jsx";
import Producto from "../assets/img/producto.png";
import "../styles/Home.css";
import axios from "axios";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <>
      <Navbar />
      <h3>Lista de productos</h3>
      <div className="product-container">
        {productos.map((producto) => (
          <div className="product" key={producto.id}>
            <img src={`http://127.0.0.1:8000/storage/${producto.imagen}`} alt="" />
            <h4>{producto.nombre}</h4>
            <p>{producto.precio}</p>
            <button>Comprar</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
