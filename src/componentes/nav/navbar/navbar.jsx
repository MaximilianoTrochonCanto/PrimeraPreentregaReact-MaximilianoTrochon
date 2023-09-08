import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../cartwidget/cartwidget';
import './navbar.css'

const NavbarBootstrap = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="Navbar">
    <Container>
      <Navbar.Brand href="#home">Ventasmania</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Remeras</Nav.Link>
        <Nav.Link href="#features">Calzado</Nav.Link>
        <Nav.Link href="#pricing">Accesorios</Nav.Link>
      </Nav>
            <Cartwidget/>                                
    </Container>
  </Navbar>

      
  )
}

export default NavbarBootstrap