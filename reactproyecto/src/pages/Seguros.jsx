import React from 'react'
import { Navbar } from '../componentes/Navbar';
import { Link } from "react-router-dom";
import { Footer } from '../componentes/Footer';
import Cards from '../componentes/Cards';

export const Seguros = () => {
  return (
    <>
      <Navbar/>
      <Cards/>
      <Footer/>
    </>
  )
}
