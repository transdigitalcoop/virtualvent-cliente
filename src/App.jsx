import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tiendas from "./pages/Tiendas";
import DetalleTiendas from "./pages/DetalleTiendas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiendas" element={<Tiendas />} />
          <Route path="/store/:tiendaId" element={<DetalleTiendas />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
