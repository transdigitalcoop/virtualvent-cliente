import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../styles/DetalleCategorias.css';
const DetalleCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/categorias`
        );
        setCategorias(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <>
      <div className="categorias-container">
        <h3>Categorías</h3>
        <div className="categorias">
          {categorias.map((categoria) => (
            <div key={categoria.id} className="categoria-item">
              <Link className="categoria-nombre">{categoria.nombre}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetalleCategorias;
