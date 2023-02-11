import React from "react"
import {Header} from "./componentes/Header"
import 'boxicons'
import logo from "../src/images/Logo.jpg"
import './App.css'
import { Footer } from "./componentes/Footer";
import Cards from './componentes/Cards'
import './App.css'
import Carousel from "./componentes/carousel"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contacto from "./componentes/Contacto.js"

function App() {
  return (
   <Router> 
    <div className="App">
      <div className="row bg-primary">
       
        <Header className="header">
           <Routes>
              <Route path="./componentes/Contacto.js" element = {Contacto} /> 
           </Routes>
        </Header>
      </div>

      <div className="row">
        <div className="container-fluid">
          <Carousel />
        </div>
      </div>
      <Cards></Cards>

      <Footer/>

    </div>
  </Router>
  );
}

export default App;


