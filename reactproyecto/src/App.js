import React from "react"
import { Header } from "./componentes/Header"
// import 'boxicons'
// import logo from "../src/images/Logo.jpg"
import './App.css'
import { Footer } from "./componentes/Footer";
import Cards from './componentes/Cards'
import './App.css'
import Carousel from "./componentes/carousel"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from "./componentes/Contacto";
import { Body } from "./componentes/Body"


function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="./componentes/Contacto" element={<Contacto />} />
        <Route exact path="./componentes/carousel" element={<Carousel />} />
        <Route exact path="./componentes/Cards" element={<Cards />} />
        <Route exact path="./componentes/Body" element={<Body />} />
        <Route exact path="./componentes/Footer" element={<Footer />} />
      </Routes>

      {/* <div className="App">
       
       {/* <Header className="header" /> */}

      {/* <div className="row"> */}
      {/* <div className="container-fluid"> */} 

      <Carousel />

      {/* </div>
       </div> */}

      <Cards />

      <Body />

      <Footer />

      <Contacto />

      {/* </div> */}



    </BrowserRouter>

  );
}

export default App;


