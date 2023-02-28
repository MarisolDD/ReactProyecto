import "boxicons";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto.jsx";
import Seguros from "./pages/Seguros.jsx";
import Inicio from "./pages/Inicio";
import ShoppingCar from "./pages/ShoppingCar";
import Navbar from "./componentes/Navbar"
import Footer from "./componentes/Footer";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Seguros" element={<Seguros />} />
        <Route path="/ShoppingCar" element={<ShoppingCar/>}/>
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
