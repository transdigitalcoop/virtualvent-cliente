import React, { useEffect, useState } from "react";
import Navbar from "../ui/Navbar.jsx";
import "../styles/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import beforeIcon from "../assets/icons/before.svg";
import nextIcon from "../assets/icons/next.svg";
import Footer from "../ui/Footer.jsx";

const Home = () => {
  const [categorias, setCategorias] = useState([]);
  const [currentIndex, setCurrentIndex] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/categories")
      .then((response) => {
        setCategorias(response.data);
        const initialIndex = {};
        response.data.forEach((categoria) => {
          initialIndex[categoria.id] = 0;
        });
        setCurrentIndex(initialIndex);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleNext = (categoriaId) => {
    setCurrentIndex((prevIndex) => ({
      ...prevIndex,
      [categoriaId]: Math.min(prevIndex[categoriaId] + 5, categorias.find(categoria => categoria.id === categoriaId).productos.length - 5),
    }));
  };

  const handlePrev = (categoriaId) => {
    setCurrentIndex((prevIndex) => ({
      ...prevIndex,
      [categoriaId]: Math.max(prevIndex[categoriaId] - 5, 0),
    }));
  };

  return (
    <>
      <Navbar />
      <div className="general-container">
        {categorias.map((categoria) => (
          <div key={categoria.id}>
            <h2>{categoria.nombre}</h2>
            <div className="productos-container">
              <div className="carousel">
                <button className="carousel-button prev" onClick={() => handlePrev(categoria.id)}><img src={beforeIcon}/></button>
                <div className="carousel-inner">
                  {categoria.productos.slice(currentIndex[categoria.id], currentIndex[categoria.id] + 5).map((producto) => (
                    <div className="producto-card" key={producto.id}>
                      <img src={`http://127.0.0.1:8000/storage/${producto.imagen}`} alt={producto.nombre} />
                      <h4>{producto.nombre}</h4>
                      <p>{`$ ${producto.precio}`}</p>
                      <Link className="link">Ver más</Link>
                    </div>
                  ))}
                </div>
                <button className="carousel-button next" onClick={() => handleNext(categoria.id)}>
                  <img src={nextIcon}/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
