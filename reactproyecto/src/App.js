import React from "react"
import {Header} from "./componentes/Header"
import 'boxicons'
import logo from "../src/images/Logo.jpg"
import './App.css'
import { Footer } from "./componentes/Footer";
import Cards from './componentes/Cards'

function App() {
  return (
    <div className="App">
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
          Aprender
        </a>
      </Header>

      <Cards></Cards>

      <Footer/>

    </div>
  );
}

export default App;
