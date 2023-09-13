import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../cartwidget/cartwidget';

import './navbar.css'


export const NavbarBootstrap = ({carrito}) => {

    

    return (
    <Navbar bg="dark" data-bs-theme="dark" className="Navbar col-12">
    <Container>
      <Navbar.Brand>Ventasmania</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Remeras</Nav.Link>
        <Nav.Link href="/calzado">Calzado</Nav.Link>
        <Nav.Link href="/accesorios">Accesorios</Nav.Link>
      </Nav>
            <Cartwidget/>                                
    </Container>
  </Navbar>

      
  )
}

