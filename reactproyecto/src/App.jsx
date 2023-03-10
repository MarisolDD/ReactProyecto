import "boxicons";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto.jsx";
import Seguros from "./pages/Seguros.jsx";
import Inicio from "./pages/Inicio";
import ShoppingCar from "./pages/ShoppingCar";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import { createContext } from "react";
import { AppProvaider } from "./AppProvaider";
import Destinos from "./pages/Destinos"
import Grupales from "./pages/Grupales"
import Autos from "./pages/Autos"

export const ContextProductos = createContext();

function App() {

  return (
    <AppProvaider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Destinos" element={<Destinos/>}/>
          <Route path="/Grupales" element={<Grupales/>}/>
          <Route path="/Autos" element={<Autos/>}/>
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Seguros" element={<Seguros />} />
          <Route path="/ShoppingCar" element={<ShoppingCar />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </AppProvaider>
  );
}

export default App;
