import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarBootstrap } from './componentes/nav/navbar/navbar';
import { useState } from 'react';
import { productos } from './productos/productos';
import { Accesorios } from './paginas/Accesorios';
import { Calzado } from './paginas/Calzado';
import { Remeras } from './paginas/Remeras';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"


function App() {
  return(
    
      <header>
        <NavbarBootstrap/>
      </header>
      
      
    

    
  )
  
}

export default App;
