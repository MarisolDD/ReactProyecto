import React from "react"
import {Header} from "./componentes/Header"
import 'boxicons'
import logo from "../src/images/Logo.jpg"
import Carousel from "./componentes/carousel"

function App() {
  return (
    <div className="container-fluid bg-warning App">

      <div className="row bg-primary">
        <div className="col">
          <Header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </Header>
        </div>
      </div>

      <div className="row bg-dark">
        <div className="col">
          <Carousel/>
        </div>
      </div>

    </div>
    
    
  );
}

export default App;
