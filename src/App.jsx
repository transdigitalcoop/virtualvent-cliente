import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tiendas from "./pages/Tiendas";
import DetalleTiendas from "./pages/DetalleTiendas";
import ShopCar from "./pages/ShopCar";
import Categorias from "./pages/Categorias";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginAdm from "../src/admin/pages/LoginAdm";
import HomeAdm from "./admin/pages/HomeAdm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiendas" element={<Tiendas />} />
          <Route path="/store/:tiendaId" element={<DetalleTiendas />} />
          <Route path="/carrito" element={<ShopCar />} />
          <Route path="/categorias" element={<Categorias/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/registrarse" element={<Register/>}/>
          <Route path="/admin" element={<LoginAdm/>}/>
          <Route path="/admin/home" element={<HomeAdm/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
