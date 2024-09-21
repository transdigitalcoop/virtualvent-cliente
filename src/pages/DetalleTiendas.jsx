import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../ui/Navbar";
import "../styles/DetalleTiendas.css";

const DetalleTiendas = () => {
  const { tiendaId } = useParams();
  const [tienda, setTienda] = useState(null);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTienda = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/store/${tiendaId}`
        );
        setTienda(response.data);
      } catch (error) {
        console.error("Error fetching tienda details:", error);
        setError("Error fetching tienda details");
      }
    };

    const fetchProductos = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/store/${tiendaId}/products`
        );
        setProductos(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching productos:", error);
        setError("Error fetching productos");
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchTienda(), fetchProductos()]);
      setLoading(false);
    };

    fetchData();
  }, [tiendaId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!tienda) {
    return <div>No se encontró la tienda.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="categorias-container">
        <h3>Categorías</h3>
      </div>
      <div className="products-container">
        <div className="products">
          {productos.map((producto) => (
            <div key={producto.id} className="product-item">
              <img
                src={`http://127.0.0.1:8000/storage/${producto.imagen}`}
                alt=""
              />
              <h4>{producto.nombre}</h4>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetalleTiendas;