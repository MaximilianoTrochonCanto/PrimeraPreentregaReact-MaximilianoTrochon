import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarBootstrap } from './componentes/nav/navbar/navbar';
import { useState } from 'react';
import { productos } from './productos/productos';
import { Accesorios } from './paginas/Accesorios';
import { Calzado } from './paginas/Calzado';
import { Remeras } from './paginas/Remeras';





function App() {

  let Componente;
  switch(window.location.pathname){
    case "/":
    Componente = <Remeras/>;
    break
    case "/accesorios":
      Componente = <Accesorios/>
    break
    case "/calzado":
      Componente = <Calzado/>;
    break
  }
  
  return (
   <body>
      <header>
        <NavbarBootstrap/>
      </header>
      <main>
        {Componente}
        </main>    
      

      
   </body>
  )
}

export default App;
