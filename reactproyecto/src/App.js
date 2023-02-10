import React from "react"
import {Header} from "./componentes/Header"
import 'boxicons'
import logo from "../src/images/Logo.jpg"
import './App.css'
import { Footer } from "./componentes/Footer";
import Cards from './componentes/Cards'
import './App.css'
import Carousel from "./componentes/carousel"

function App() {
  return (
    <div className="App">
      <div className="row bg-primary">
        <Header className="header"></Header>
      </div>

      <div className="row">
        <div className="container-fluid">
          <Carousel />
        </div>
      </div>
      <Cards></Cards>

      <Footer/>

    </div>

  );
}

export default App;
