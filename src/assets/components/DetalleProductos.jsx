import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../../styles/DetalleProductos.css";
const DetalleProductos = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/products`);
        setProductos(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching productos:", error);
        setError("Error fetching productos");
      }
    };
    fetchProductos();
  }, []);

  return (
    <>
      <div className="detalle-products-container">
        <div className="detalle-products">
          {productos.map((producto) => (
            <div key={producto.id} className="detalle-product-item">
              <img
                src={`http://127.0.0.1:8000/storage/${producto.imagen}`}
                alt={producto.nombre}
              />
              <h4>{producto.nombre}</h4>
              <p>Precio: ${producto.precio}</p>
              <Link className="link">Más información</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetalleProductos;
