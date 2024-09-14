import React from "react";
import Navbar from "../ui/Navbar";
import Buscar from "../assets/icons/search.svg";
import "../styles/Tiendas.css";
import Image from "../assets/img/image.png";
import { useEffect, useState } from "react";
import axios from "axios";

const Tiendas = () => {
    const [tiendas, setTiendas] = useState([]);

    useEffect(() => {
        const fetchTiendas = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/tiendas");
                setTiendas(response.data);
            } catch (error) {
                console.error("Error fetching tiendas:", error);
            }
        };

        fetchTiendas();
    }, []);

    return (
        <>
            <Navbar />
            <form className="buscar-tiendas" action="">
                <input type="text" placeholder="Buscar tiendas" name="" id="" />
                <button type="submit">
                    <img src={Buscar} alt="" />
                </button>
            </form>
            <div className="tiendas-container">
                <h3>Tiendas oficiales</h3>
                <div className="tiendas">
                    {tiendas.map((tienda) => (
                        <div className="tienda" key={tienda.id}>
                            <img src={`http://127.0.0.1:8000/storage/${tienda.logo}`|| Image} alt={tienda.razon_social} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tiendas;
