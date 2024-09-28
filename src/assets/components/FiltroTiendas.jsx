import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../styles/FiltroTiendas.css";
const DetalleTiendas = () => {
  const [tiendas, setTiendas] = useState([]);
  useEffect(() => {
    const fetchTiendas = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/tiendas`);
        setTiendas(response.data);
      } catch (error) {
        console.error("Error fetching tiendas:", error);
      }
    };
    fetchTiendas();
  }, []);

  return (
    <>
      <div className="filtro-tiendas-container">
        <h3>Tiendas</h3>
        <div className="filtro-tiendas">
          {tiendas.map((tienda) => (
            <div key={tienda.id} className="filtro-tienda-item">
              <Link className="filtro-tienda-nombre">{tienda.razon_social}</Link>
            </div>
          ))}
        </div>
      </div>  
    </>
  );
};

export default DetalleTiendas;
